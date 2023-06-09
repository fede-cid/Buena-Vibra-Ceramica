import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(cartItems);
  }, []);

  useEffect(() => {
    const prices = items.map((item) => item.precio * item.cantidad);
    const totalPrice = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalPrice(totalPrice);
  }, [items]);

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          cantidad: newQuantity,
        };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleBuy = () => {
    const productList = items
      .map((item) => `${item.titulo} (${item.cantidad})`)
      .join("%0A");

      const message = `Hola buenos dias, quería solicitarte estos productos: %0A${productList}, total aproximado:%0A${totalPrice}`;
    window.open(`https://wa.me/5491167879133?text=${message}`, "_blank");
  };

  return (
    <div className={styles.conteiner}>
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <FaShoppingCart />
        <span className={styles.cartHeaderTitle}>Shopping Cart</span>
        <span className={styles.cartHeaderCount}>{items.length} items</span>
      </div>
      {items.length === 0 ? (
        <div className={styles.cartEmpty}>Your cart is empty.</div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImg}>
                  <img src={item.img} alt={item.titulo} />
                </div>
                <div className={styles.cartItemDetails}>
                  <div className={styles.cartItemName}>{item.titulo}</div>
                  <div className={styles.cartItemPrice}>
                    {item.cantidad} x {item.precio}
                  </div>
                  <div className={styles.cartItemActions}>
                    <div className={styles.cartItemQuantity}>
                      <button
                        className={styles.cartItemButton}
                        onClick={() =>
                          handleQuantityChange(item.id, item.cantidad - 1)
                        }
                        disabled={item.cantidad === 1}
                      >
                        -
                      </button>

                      <button
                        className={styles.cartItemButton}
                        onClick={() =>
                          handleQuantityChange(item.id, item.cantidad + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className='btnicono'
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button className='btnprimario' onClick={handleBuy}>
              Buy (${totalPrice})
            </button>
          </div>
        </>
      )}
    </div></div>
  );
};

export default Cart;
