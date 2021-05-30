import Info from "../../common/Error";
import { useCart } from "../../context/cart"

const Cart = () => {
  const [state, dispach] = useCart();
  const {data} = state;
  if(!data || !Object.keys(data).length) return (
      <Info
        title="Empty Cart"
        type="info"
        message="Seems like you have not added anything to cart yet.."
      />
  )
  return (
    <div className="section">
      <div className="header">
        Header
      </div>
      <div className="cart-container">
        {Object.entries(data).map(([id,{name, count, price}]) => (
          <>
          <div key={id}>{name}</div>
          <div>{price}X{count}</div>
          </>
        ))}
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  )
}
export default Cart