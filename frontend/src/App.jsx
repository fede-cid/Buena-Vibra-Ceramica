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

function App() {
  return (
    <ProductoState>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Inicio/> } />
        <Route path='/Productos' element={ <Productos/> } />
        <Route path='/nosotros' element={ <Nosotros/> } />
        <Route path='/carrito' element={ <Carrito/> } />
        <Route path='/checkout' element={ <Checkout/> } />
      </Routes>
    </ProductoState>
  )
}

export default App;
