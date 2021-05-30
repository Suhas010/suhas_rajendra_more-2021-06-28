import { currency } from "../../utils/helper"
import Image from "../../common/Image";

const Product = ({name, price, id, createdAt, onChecked, checked}) => (
  <div key={id} className="entry">
    <input
      type="checkbox"
      checked={!!checked}
      id={id}
      name={name}
      value={name}
      onChange={onChecked}
      className="checkbox"
    />
    <label for={id}>
      <span>{name}</span><br/>
      <span className="information">{currency(price)}</span>
      <span className="information createdat">{new Date(createdAt).toString().split("GMT")[0]}</span>

    </label>
    
  </div>
)

export default Product