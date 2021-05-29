import { ProductProvider } from '../../context/product';
import Cart from '../cart';
import ProductsList from '../products';
import './main.css';

const Main = () => (
  <main>
    <div className="main-container">
      <ProductProvider>
        <ProductsList />
      </ProductProvider>
      <Cart />
    </div>
    
  </main>
);

export default Main;