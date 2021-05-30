
const Button = ({name, handleClick, type, ...rest}) => (
  <button
    className={`button`}
    onClick={handleClick}
    {...rest}
  >
    {name}
  </button>
)

export default Button;

