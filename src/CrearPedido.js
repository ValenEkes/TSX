import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from 'react';
import { Productos, Estados } from './Productos.js';
import PedidosContext from './PedidosContext';
import './Diseño/Formulario.css';
const CrearPedido = () => {
    const context = useContext(PedidosContext);
    if (!context) {
        throw new Error('CrearPedido must be used within a PedidosProvider');
    }
    const { pedidos, setPedidos } = context;
    const [precio, setPrecio] = useState(0);
    const handleProductoChange = (e) => {
        const selectedNombre = e.target.value;
        const producto = Productos.find((p) => p.nombre === selectedNombre);
        setPrecio(producto ? producto.precio : 0);
    };
    const agregarPedido = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const Pedido = {
            ID: pedidos.length + 1,
            NombreCliente: form.NombreCliente.value,
            Fecha: form.Fecha.value,
            NombreProducto: form.NombreProducto.value,
            CantidadProducto: parseInt(form.CantidadProducto.value),
            Precio: precio,
            Estado: form.Estado.value
        };
        setPedidos([...pedidos, Pedido]);
        form.reset();
        setPrecio(0);
    };
    return (_jsxs("div", { className: "formulario", children: [_jsx("h2", { children: "Crear Pedido" }), _jsxs("form", { onSubmit: agregarPedido, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "NombreCliente", children: "Nombre" }), _jsx("input", { type: "text", id: "NombreCliente", name: "NombreCliente", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "Fecha", children: "Fecha" }), _jsx("input", { type: "date", id: "Fecha", name: "Fecha", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "NombreProducto", children: "Nombre Productos" }), _jsxs("select", { id: "NombreProducto", name: "NombreProducto", onChange: handleProductoChange, required: true, children: [_jsx("option", { value: "", children: "Selecciona un producto" }), Productos.map((e) => (_jsx("option", { value: e.nombre, children: e.nombre }, e.id)))] })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "CantidadProducto", children: "Cantidad" }), _jsx("input", { type: "number", id: "CantidadProducto", name: "CantidadProducto", min: "1", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "Estado", children: "Tipo de Estado" }), _jsxs("select", { id: "Estado", name: "Estado", required: true, children: [_jsx("option", { value: "", children: "Selecciona un estado" }), Estados.map((e) => (_jsx("option", { value: e.estado, children: e.estado }, e.id)))] })] }), _jsx("button", { type: "submit", className: "btn-submit", children: "Agregar Pedido" })] })] }));
};
export default CrearPedido;
