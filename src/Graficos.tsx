import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import PedidosContext, { Pedido } from './PedidosContext';
import { Estados } from './Productos.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graficos: React.FC = () => {
  const context = useContext(PedidosContext);
  if (!context) {
    throw new Error('Graficos must be used within a PedidosProvider');
  }
  const { pedidos } = context;

  // Calcular la cantidad de pedidos por estado
  const contadoresPorEstado = Estados.reduce((acc: { [key: string]: number }, estado) => {
    acc[estado.estado] = pedidos.filter((p: Pedido) => p.Estado === estado.estado).length;
    return acc;
  }, {});

  const data = {
    labels: Estados.map(estado => estado.estado),
    datasets: [
      {
        label: 'Cantidad de Pedidos',
        data: Estados.map(estado => contadoresPorEstado[estado.estado]),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Pedidos por Estado',
      },
    },
  };

  return (
    <div>
      <h2>Gráficos de Pedidos por Estado</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graficos;
