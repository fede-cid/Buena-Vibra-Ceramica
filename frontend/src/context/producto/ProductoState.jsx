import { useReducer } from "react";

import ProductoReducer from "./ProductoReducer";
import ProductoContext from "./ProductoContext";

const ProductoState = (props) => {
  const initialState = {
    producto: {
      id: 1,
      nombre: "Tu compañia cada mañana",
      descripcion: "¡Despierta tus sentidos y disfruta del té en una obra de arte personalizada! Nuestros jarrones artesanales de cerámica son más que simples recipientes, son piezas únicas que reflejan tu estilo y personalidad. Cada sorbo es una experiencia única, con un jarro personalizado que demuestra que mereces lo mejor. Sumérgete en un mundo de sabor y creatividad con nuestros jarrones artesanales personalizados.",
      imagen: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/jarrito.jpeg?raw=true"
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