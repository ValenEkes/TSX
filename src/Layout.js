import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, Link } from 'react-router-dom';
import './Diseño/Layout.css';
const Layout = () => {
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: "navBar", children: _jsx("div", { className: "NavBar-Contenedor", children: _jsxs("div", { className: "Links", children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/crear-pedido", children: "Crear Pedido" }), _jsx(Link, { to: "/listado", children: "Lista de pedidos" }), _jsx(Link, { to: "/graficos", children: "Grafico de Pedidos" })] }) }) }), _jsx(Outlet, {}), _jsx("footer", { children: _jsx("p", { children: "Hecho por Valentino Ekes" }) })] }));
};
export default Layout;
