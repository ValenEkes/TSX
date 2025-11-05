import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from "react";
import { Estados } from './Productos.js';
import PedidosContext from './PedidosContext';
import Pedidos from "./Pedidos";
import './Diseño/Listado.css';
const Listado = () => {
    const context = useContext(PedidosContext);
    if (!context) {
        throw new Error('Listado must be used within a PedidosProvider');
    }
    const { pedidos, setPedidos } = context;
    const [filtroEstado, setFiltroEstado] = useState("");
    const pedidosFiltrados = filtroEstado ? pedidos.filter((p) => p.Estado === filtroEstado) : pedidos;
    // Calcular contadores
    const totalPedidos = pedidos.length;
    const contadoresPorEstado = Estados.reduce((acc, estado) => {
        acc[estado.estado] = pedidos.filter((p) => p.Estado === estado.estado).length;
        return acc;
    }, {});
    return (_jsxs("div", { className: "Listado", children: [_jsx("h2", { children: "Pedidos registrados" }), _jsxs("div", { className: "contadores", children: [_jsxs("p", { children: [_jsx("strong", { children: "Total de Pedidos:" }), " ", totalPedidos] }), Estados.map((estado) => (_jsxs("p", { children: [_jsxs("strong", { children: [estado.estado, ":"] }), " ", contadoresPorEstado[estado.estado]] }, estado.id)))] }), _jsxs("div", { className: "filtro", children: [_jsx("label", { htmlFor: "estado", children: "Filtrar por Estado:" }), _jsxs("select", { id: "estado", value: filtroEstado, onChange: (e) => setFiltroEstado(e.target.value), children: [_jsx("option", { value: "", children: "Todos" }), Estados.map((e) => (_jsx("option", { value: e.estado, children: e.estado }, e.id)))] })] }), _jsx("div", { className: "pedidos-container", children: pedidosFiltrados.map((e, index) => _jsx(Pedidos, { ID: e.ID, Cliente: e.NombreCliente, Fecha: e.Fecha, Estado: e.Estado, NombreProducto: e.NombreProducto, CantidadProducto: e.CantidadProducto, Precio: e.Precio }, e.ID)) })] }));
};
export default Listado;
