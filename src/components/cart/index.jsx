import {Info, Button} from "../../common";
// import Info from "../../common/Error";
import { useCart } from "../../context/cart"
import { ACTIONS } from "../../utils/constants";
import { currency } from "../../utils/helper";
import CartItem from "./CartItem";
import './index.css'

const Cart = () => {
  const [state, dispach] = useCart();
  const {data} = state;

  const handlePlaceOrder = () => {
    alert("Thank you for, Shopping with us! __/\\__ ")
    dispach({type: ACTIONS.CLEAR_CART});
  }
  
  let total = 0;
  const renderCartItem = () => {
    return Object.entries(data).map(([id,{color, ...rest}], index) => {
      total += rest.price  * rest.count;
      return (
        <CartItem 
          id={id}
          color={index%2===0 ? '#defad7' : '#faefd7'}
          {...rest}
        />
      )}
    )
  }

  const isEmpty = !data || !Object.keys(data).length;

  return (
    <div className="section">
      <div className="header">
        <h3>Cart Details</h3>
        <div className="sub-header">
          {Object.keys(data).length} Unique Items
        </div>
      </div>
      {isEmpty && (
        <Info
          title="Empty Cart"
          type="info"
          message="Seems like you have not added anything to cart yet.."
        />
      )}
      {!isEmpty && (
        <>
        <div className="cart-container">
          {renderCartItem()}
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
        </>
      )}
    </div>
  )
}

export default Cart