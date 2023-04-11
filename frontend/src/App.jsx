//React-Router-Dom
import {Routes, Route  } from 'react-router-dom'

// Estilos
import '../styles/index.css'

//Paginas
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Nosotros from './pages/Nosotros'
import Carrito from './pages/Carrito'
import Checkout from './pages/Checkout'

//Componentes
import Navbar from './components/navegacion/Navbar'

// Context Producto
import ProductoState from './context/producto/ProductoState'
import Footer from './components/Footer/Footer'
const data = [
  {
    titulo: "Jarrito",
    cantidad:0,
    id:1,
    precio: 2500,
    img: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/jarrito.jpeg?raw=true",
    tipo:'jarro',
  },
  {
    titulo: "Combos",
    cantidad:0,
    id:2,
    precio: 2500,
    img: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/combo.jpeg?raw=true",
    tipo:'combo',
  },
  {
    titulo: "Mate",
    cantidad:0,
    id:3,
    precio: 2500,
    img: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/mate.jpeg?raw=true",
    tipo:'mate',
  },
  {
    titulo: "Mate",
    cantidad:0,
    id:4,
    precio: 2500,
    img: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/mate2.jpeg?raw=true",
    tipo:'mate',
  },
  {
    titulo: "Taza",
    cantidad:0,
    id:5,
    precio: 2500,
    img: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/taza1.jpeg?raw=true",
    tipo:'taza',
  },
  {
    titulo: "Taza",
    cantidad:0,
    id:6,
    precio: 2500,
    img: "https://raw.githubusercontent.com/fede-cid/Buena-Vibra-Ceramica/main/frontend/src/recursos/taza2.jpeg",
    tipo:'taza',
  },
  {
    titulo: "Pocillos",
    cantidad:0,
    id:7,
    precio: 2500,
    img: "https://github.com/fede-cid/Buena-Vibra-Ceramica/blob/main/frontend/src/recursos/dobletaza.jpeg?raw=true",
    tipo:'taza',
  },
];

function App() {
  return (
    <ProductoState>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Inicio data={data}/> } />
        <Route path='/Productos' element={ <Productos data={data}/> } />
        <Route path='/nosotros' element={ <Nosotros/> } />
        <Route path='/carrito' element={ <Carrito/> } />
        <Route path='/checkout' element={ <Checkout/> } />
      </Routes>
      <Footer/>
    </ProductoState>
  )
}

export default App;
