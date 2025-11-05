import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
const PedidosContext = createContext(undefined);
export const PedidosProvider = ({ children }) => {
    const [pedidos, setPedidos] = useState([]);
    useEffect(() => {
        const saved = localStorage.getItem('pedidos');
        if (saved) {
            try {
                setPedidos(JSON.parse(saved));
            }
            catch (error) {
                console.error('Error parsing pedidos from localStorage:', error);
            }
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
    }, [pedidos]);
    return (_jsx(PedidosContext.Provider, { value: { pedidos, setPedidos }, children: children }));
};
export default PedidosContext;
