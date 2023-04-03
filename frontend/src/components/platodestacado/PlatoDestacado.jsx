import { useContext } from 'react';

import Estilo from './PlatoDestacado.module.css';

import ContenedorImagen from './ContenedorImagen';
import ContenedorInfo from './ContenedorInfo';

import ProductoContext from '../../context/producto/ProductoContext';

const PlatoDestacado = () => {

  const { producto } = useContext(ProductoContext);

  return (  
    <div className={Estilo.Contenedor}>
      <div className={Estilo.ContenedorDestacado}>
        <h2 className={Estilo.EncabezadoPrincipal}>
          Nuestro plato destacado
        </h2>
        <div className={Estilo.ContenedorDetalles}>
          <ContenedorImagen producto={producto}/>
          <ContenedorInfo producto={producto}/>
        </div>
      </div>
    </div>
  );
}
 
export default PlatoDestacado;