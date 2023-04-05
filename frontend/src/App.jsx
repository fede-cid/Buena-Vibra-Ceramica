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
const data = [
  {
    titulo: "Jarrito",
    cantidad:0,
    id:1,
    precio: 2500,
    img: "../../../../src/recursos/jarrito.jpeg",
    tipo:'jarro',
  },
  {
    titulo: "Combos",
    cantidad:0,
    id:2,
    precio: 2500,
    img: "../../../../src/recursos/combo.jpeg",
    tipo:'combo',
  },
  {
    titulo: "Mate",
    cantidad:0,
    id:3,
    precio: 2500,
    img: "../../../../src/recursos/mate.jpeg",
    tipo:'mate',
  },
  {
    titulo: "mate",
    cantidad:0,
    id:4,
    precio: 2500,
    img: "../../../../src/recursos/mate2.jpeg",
    tipo:'mate',
  },
  {
    titulo: "taza",
    cantidad:0,
    id:5,
    precio: 2500,
    img: "../../../../src/recursos/taza1.jpeg",
    tipo:'taza',
  },
  {
    titulo: "Empanadas de Queso fritas",
    cantidad:0,
    id:6,
    precio: 2500,
    img: "../../../../src/recursos/taza2.jpeg",
    tipo:'taza',
  },
  {
    titulo: "Empanadas de Queso fritas",
    cantidad:0,
    id:7,
    precio: 2500,
    img: "../../../../src/recursos/dobletaza.jpeg",
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
    </ProductoState>
  )
}

export default App;
