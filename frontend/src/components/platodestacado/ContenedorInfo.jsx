import { useEffect } from 'react';

import Estilo from './PlatoDestacado.module.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const ContenedorInfo = ({producto}) => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {

    if(inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1
        }
      })
    } 
    if(!inView) {
      animation.start({
        opacity: 0,
        x: 300,
        transition: {
          duration: 1
        }
      })
    }

  }, [inView])

  if (Object.entries(producto).length === 0) {
    return null;
  }

  return (  
    <motion.div 
      className={Estilo.ContenedorInfo}
      ref={ref}
      initial={{
        opacity: 0,
        x: 500,
      }}
      animate={animation}
    >
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <div>
        <a
          style={{
            border: '1px solid var(--text-color)'
          }}
          className={`btnicono`}
          href=''>
          <span>Ver más</span>
          </a>
      </div>
    </motion.div>
  );
}
 
export default ContenedorInfo;