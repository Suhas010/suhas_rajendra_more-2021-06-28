import { CartProvider } from '../../context/cart';
import { ProductProvider } from '../../context/product';
import Cart from '../cart';
import ProductsList from '../products';
import './main.css';

const Main = () => (
  <main>
    <div className="main-container">
      <ProductProvider>
        <CartProvider>
          <ProductsList />
          <Cart />
        </CartProvider>
      </ProductProvider>
    </div>
    
  </main>
);

export default Main;