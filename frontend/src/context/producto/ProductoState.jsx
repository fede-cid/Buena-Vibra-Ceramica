import { useReducer } from "react";

import ProductoReducer from "./ProductoReducer";
import ProductoContext from "./ProductoContext";

const ProductoState = (props) => {
  const initialState = {
    producto: {
      id: 1,
      nombre: "Hamburguesa de Falafel al horno",
      descripcion: "Hamburguesa de Falafel al horno Nuestras hamburguesas veganas de falafel son una gran alternativa saludable a las hamburguesas normales, ¡y son súper fáciles de hacer! Sólo tienes que cocerlas en el horno y cubrirlas con tus ingredientes favoritos.",
      imagen: "/recursos/PLATO.jpg"
    }
  }

  const [ state, dispatch ] = useReducer(ProductoReducer, initialState);

  return (
    <ProductoContext.Provider value={{
      producto: state.producto
    }}>
      {props.children}
    </ProductoContext.Provider>
  )
}

export default ProductoState;