const Product = ({name, price, id, checked}) => (
  <div key={id} className="entry">
    <span>{name}</span>
    <br/>
    <span>{price}</span>
  </div>
)

export default Product