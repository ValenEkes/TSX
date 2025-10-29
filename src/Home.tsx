import { Outlet,Link } from 'react-router-dom';
import './Diseño/Home.css'
const Home = () => {
    return (
      <div className='Texto'>
        <div>
        <h1>Home</h1>
        <h2>Bienvenido a la Pagina</h2>
        <p>Funciona de la siguiente forma, vos en "Crear Pedido" ingresas lo que queres pedir</p>
        <p>Ese pedido se guardara en "Lista Pedidos", en donde encontraras todos los pedido (ademas puedes buscar algun pedido en particular a traves del filtro tipo de estado)</p>
        </div>
      <div>
      <Link to='/crear-pedido'>Crear Pedido</Link>
      </div>
      <Link to='/listado'>Lista de pedidos</Link>
      <div>
      <Link to='/graficos'>Gráficos de Pedidos</Link>
      </div>
      </div>
    );
  };
  
  export default Home;
  