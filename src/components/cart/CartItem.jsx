import { currency } from "../../utils/helper";

const CartItem = ({id, name, count, price, color}) => (
  <div className="cart-item" key={id} style={{backgroundColor: color}}>
    <div className="id">{id}</div>
    <div className="cart-name">
        <div>
          {name}
        </div>
      <div className="details">
        <div>{count}</div>
        X
        <div>{currency(price)} / unit</div>
      </div>
    </div>
    <div>
      
    </div>
    <div className="total">{currency(count*price)}</div>
  </div>
)

export default CartItem;