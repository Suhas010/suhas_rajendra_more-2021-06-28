import Button from "../../common/Button";
import Info from "../../common/Error";
import { useCart } from "../../context/cart"
import { currency } from "../../utils/helper";
import CartItem from "./CartItem";
import './index.css'
const Cart = () => {
  const [state, dispach] = useCart();
  const {data} = state;

  const handlePlaceOrder = () => {
    console.log("object")
  }

  if(!data || !Object.keys(data).length) return (
      <Info
        title="Empty Cart"
        type="info"
        message="Seems like you have not added anything to cart yet.."
      />
  )
  console.log(data, data.length)
  let total = 0;
  return (
    <div className="section">
      <div className="header">
        <h3>Cart Details</h3>
        <div className="sub-header">
          {Object.keys(data).length} Uniqu Items
        </div>
      </div>
      <div className="cart-container">
        {Object.entries(data).map(([id,{...rest}]) => {
          total += rest.price  * rest.count
          return (
            <CartItem id={id} {...rest}/>
          )}
        )}
      </div>
      <div className="footer">
        <div className="total">
          Total Payeble: {currency(total)}
        </div>
        <div className="actions">
          <Button
            name="Place order"
            handleClick={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  )
}
export default Cart