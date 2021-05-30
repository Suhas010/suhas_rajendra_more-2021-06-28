const Product = ({name, price, id, onChecked}) => (
  <div key={id} className="entry">
    <input type="checkbox" id={id} name={name} value={name} onChange={onChecked}/>
    <label for={id}>
      <span>{name}</span><br/>
      <span>{price}</span>
    </label>
  </div>
)

export default Product