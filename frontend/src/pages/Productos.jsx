import ProductList from "../components/cards/Productos/ProductList";

import Catalogo from "../components/Catalogo/Catalogo";
const Productos = ({data}) => {
    return(
        <div>
            <ProductList data={data}/>
             <Catalogo/>
        </div>
    )
};


export default Productos;