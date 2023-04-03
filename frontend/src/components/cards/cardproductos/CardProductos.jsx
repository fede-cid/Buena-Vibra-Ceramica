import style from './CardProductos.module.css';

const CardProductos = ({ props }) => {
  return (
    <>
        <div className={style.content}>
          <div className={style.btn}>
           <img src={props.img} /> 
          </div>
          <div className={style.description}>
            <h3>{props.titulo}</h3>
            <span>{props.precio}</span> 
            <button>Añadir al carrito</button>
          </div>
        </div>
    </>
  )
}

export default CardProductos