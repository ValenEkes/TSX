import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import PedidosContext from './PedidosContext';
const CantidadPedidos = () => {
    const context = useContext(PedidosContext);
    if (!context) {
        throw new Error('CantidadPedidos must be used within a PedidosProvider');
    }
    const { pedidos } = context;
    const totalPedidos = pedidos.length;
    return (_jsxs("div", { className: "cantidad-pedidos", children: [_jsx("h2", { children: "Cantidad de Pedidos" }), _jsx("div", { className: "total-pedidos", children: _jsxs("p", { children: [_jsx("strong", { children: "Total de Pedidos Registrados:" }), " ", totalPedidos] }) })] }));
};
export default CantidadPedidos;
