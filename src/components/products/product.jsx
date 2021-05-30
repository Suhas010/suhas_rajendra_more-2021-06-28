const Product = ({name, price, id, onChecked, checked}) => (
  <div key={id} className="entry">
    <input type="checkbox" checked={!!checked} id={id} name={name} value={name} onChange={onChecked}/>
    <label for={id}>
      <span>{name}</span><br/>
      <span>{price}</span>
    </label>
  </div>
)

export default Product