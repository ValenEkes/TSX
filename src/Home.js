import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Diseño/Home.css';
const Home = () => {
    return (_jsxs("div", { className: 'Texto', children: [_jsxs("div", { children: [_jsx("h1", { children: "Home" }), _jsx("h2", { children: "Bienvenido a la Pagina" }), _jsx("p", { children: "Funciona de la siguiente forma, vos en \"Crear Pedido\" ingresas lo que queres pedir" }), _jsx("p", { children: "Ese pedido se guardara en \"Lista Pedidos\", en donde encontraras todos los pedido (ademas puedes buscar algun pedido en particular a traves del filtro tipo de estado)" })] }), _jsx("div", { children: _jsx(Link, { to: '/crear-pedido', children: "Crear Pedido" }) }), _jsx(Link, { to: '/listado', children: "Lista de pedidos" }), _jsx("div", { children: _jsx(Link, { to: '/graficos', children: "Gr\u00E1ficos de Pedidos" }) })] }));
};
export default Home;
