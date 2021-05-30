
const Button = ({name, handleClick, type, ...rest}) => (
  <button
    className={`button ${type}`}
    onClick={handleClick}
    {...rest}
  >
    {name}
  </button>
)

export default Button;

