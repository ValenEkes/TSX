import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Layout from './Layout'
import Listado from './Listado'
import CrearPedido from './CrearPedido'
import Graficos from './Graficos'
import { PedidosProvider } from './PedidosContext'


  function App() {
    return (
      <PedidosProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/crear-pedido" element={<CrearPedido />} />
              <Route path="/listado" element={<Listado />} />
              <Route path="/graficos" element={<Graficos/>} />
            </Route>
          </Routes>
        </HashRouter>
      </PedidosProvider>
    )
  }

export default App
