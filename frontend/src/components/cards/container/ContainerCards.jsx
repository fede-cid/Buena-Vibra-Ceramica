import CardProductos from "../cardproductos/CardProductos";
import style from './ContainerCards.module.css';
import IMG from '../../../../src/recursos/jarrito.jpeg';
import IMG2 from '../../../../src/recursos/PRODUCTO.jpg';
import Carrousel from "../../Carrousel/Carrousel";

const ContainerCards = () => {
  const data = [{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/jarrito.jpeg',
    img2: IMG2,
  },{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/combo.jpeg',
    img2: IMG2,
  }
  ,{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/mate.jpeg',
    img2: IMG2,
  }
  ,{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/mate2.jpeg',
    img2: IMG2,
  }
  ,{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/taza1.jpeg',
    img2: IMG2,
  },{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/taza2.jpeg',
    img2: IMG2,
  },{
    titulo: 'Empanadas de Queso fritas',
    precio: '$2.500',
    img: '../../../../src/recursos/dobletaza.jpeg',
    img2: IMG2,
  }]
  return (
    <>
    <Carrousel img={data}/>
      <div className={style.conteiner}>
        <div className={style.title}>
          <h1>Nuestros Productos Recomendados</h1>
        </div>
        <div className={style.containerCards}>
          <div className={style.imgCard}>
            <img src={data.img2}/>
          </div>
          <div className={style.imgCard}>
            <img src={data.img2}/>
          </div>
          <div className={style.imgCard}>
            <img src={data.img2}/>
          </div>
        </div>
      </div>
      <div className={style.conteiner}>
        <div className={style.title}>
          <h1>Mas productos</h1>
        </div>
        <div className={style.containerCards}>
          <div>
            <CardProductos props={data}/>
          </div>
          <div>
            <CardProductos props={data}/>
          </div>
          <div>
            <CardProductos props={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerCards