import { memo } from "react"
import { currency } from "../../utils/helper"

const Product = ({name, price, id, createdAt, handleToggle, checked, color}) => (
  <div key={id} className="entry" style={{backgroundColor: color}}>
    <input
      type="checkbox"
      checked={!!checked}
      id={id}
      name={name}
      value={name}
      onChange={handleToggle}
      className="checkbox"
    />

    <label htmlFor={id}>
      <span>{name}</span><br/>
      <span className="information">
        {currency(price)}
      </span>
      <span className="information createdat">
        {new Date(createdAt).toString().split("GMT")[0]}
      </span>
    </label>
  </div>
)

export default memo(Product)