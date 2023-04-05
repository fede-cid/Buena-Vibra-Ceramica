import ProductList from "../components/cards/Productos/ProductList";

const Productos = ({data}) => {
    return(
        <div>
            <ProductList data={data}/>
        </div>
    )
};


export default Productos;