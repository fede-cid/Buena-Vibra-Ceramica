import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { motion } from 'framer-motion';

import Estilo from './Navbar.module.css';

const Navbar = () => {

  const [ menu, setMenu ] = useState(false);

  const SVGMenu = () => menu? <AiOutlineClose /> : <AiOutlineMenu />

  return(
    <header className={Estilo.ContenedorHeader}>
      <nav className={Estilo.ContenedorNavbar}>
        <h1 className={Estilo.Titulo}>Tulia</h1>
        <div
          onClick={() => setMenu(!menu)}  
        >
          { menu
            ? <AiOutlineClose />
            : <AiOutlineMenu />
          }
        </div>
        <motion.ul
          className={Estilo.MenuItem}
          initial={{
            height: '0',
          }}
          animate={{
            height: menu? '250px': '0',
          }}
          transition={{
            duration: .3
          }}
        >
          <li>
            <NavLink to='/' onClick={() => setMenu(!menu)}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/productos' onClick={() => setMenu(!menu)}>Productos</NavLink>
          </li>
          <li>
            <NavLink to='/nosotros' onClick={() => setMenu(!menu)}>Nosotros</NavLink>
          </li>
          <li>
            <NavLink to='/carrito' onClick={() => setMenu(!menu)}>Carrito</NavLink><span>5</span>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
};


export default Navbar;