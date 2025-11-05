import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './Diseño/Pedidos.css';
const Pedidos = ({ ID, Cliente, Fecha, Estado, NombreProducto, CantidadProducto, Precio }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "PedidosLista", children: [_jsxs("div", { children: [_jsx("p", { children: "ID" }), _jsx("span", { children: ID })] }), _jsxs("div", { children: [_jsx("p", { children: "Cliente" }), _jsx("span", { children: Cliente })] }), _jsxs("div", { children: [_jsx("p", { children: "Fecha" }), _jsx("span", { children: Fecha })] }), _jsxs("div", { children: [_jsx("p", { children: "Estado" }), _jsx("span", { children: Estado })] }), _jsxs("div", { children: [_jsx("p", { children: "Nombre Producto" }), _jsx("span", { children: NombreProducto })] }), _jsxs("div", { children: [_jsx("p", { children: "Cantidad del Producto" }), _jsx("span", { children: CantidadProducto })] }), _jsxs("div", { children: [_jsx("p", { children: "Precio" }), _jsx("span", { children: Precio })] })] }) }));
};
export default Pedidos;
