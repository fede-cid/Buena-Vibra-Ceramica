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
    const prices = items.map(item => item.precio * item.cantidad);
    console.log(items)
    const totalPrice = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setTotalPrice(totalPrice);
  }, [items]);

  return (
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
            {items.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImg}>
                  <img src={item.img} alt={item.titulo} />
                </div>
                <div className={styles.cartItemDetails}>
                  <div className={styles.cartItemName}>{item.titulo}</div>
                  <div className={styles.cartItemPrice}>
                    {item.cantidad} x {item.precio}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartTotal}>
            <span className={styles.cartTotalTitle}>Total:</span>
            <span className={styles.cartTotalPrice}>${totalPrice.toFixed(2)}</span>
          </div>
          <button className={styles.cartCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;