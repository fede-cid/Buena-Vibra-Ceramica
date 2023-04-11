import React, { useState } from 'react';
import styles from './ProductList.module.css';
import { FaShoppingCart } from 'react-icons/fa';

function ProductList({ data }) {
  const [productos, setProductos] = useState(data);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // verifica si el producto ya existe en el carrito
    const existingProduct = cartItems.find((item) => item.id === product.id);
  
    if (existingProduct) {
      // si el producto ya existe en el carrito, agrega la cantidad
      existingProduct.cantidad += product.cantidad;
    } else {
      // si el producto no existe en el carrito, agrégalo
      cartItems.push({ ...product });
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const menos = (id) => {
    const newProductos = productos.map((product) => {
      if (product.id === id && product.cantidad > 0) {
        return {
          ...product,
          cantidad: product.cantidad - 1
        };
      }
      return product;
    });
    setProductos(newProductos);
  };

  const mas = (id) => {
    const newProductos = productos.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          cantidad: product.cantidad + 1
        };
      }
      return product;
    });
    setProductos(newProductos);
  };

  return (
    <div className={styles.grid}>
      {productos.map(product => (
        <div className={styles.product} key={product.name}>
          <img src={product.img} alt={product.name} />
          <h3>{product.titulo}</h3>
          <p>{product.tipo}</p>
          <p>${product.precio}</p>
          <div>
            <button className='btnprimario'onClick={() => menos(product.id)}>−</button> {product.cantidad} <button className='btnprimario' onClick={() => mas(product.id)}>+</button>
          </div>
          <button className='btnicono' onClick={() => addToCart(product)} disabled={!product.cantidad}>Agregar al carrito  <FaShoppingCart size={30} /></button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;