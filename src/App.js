import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Layout from './Layout';
import Listado from './Listado';
import CrearPedido from './CrearPedido';
import Graficos from './Graficos';
import { PedidosProvider } from './PedidosContext';
function App() {
    return (_jsx(PedidosProvider, { children: _jsx(HashRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/crear-pedido", element: _jsx(CrearPedido, {}) }), _jsx(Route, { path: "/listado", element: _jsx(Listado, {}) }), _jsx(Route, { path: "/graficos", element: _jsx(Graficos, {}) })] }) }) }) }));
}
export default App;
