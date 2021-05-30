import { useEffect } from 'react';
import Button from '../../common/Button';
import Info from '../../common/Error';
import Loading from '../../common/Loading';
import SearchBox from '../../common/SearchBox';
import { useCart } from '../../context/cart';
import { useProduct } from '../../context/product';
import { ACTIONS, STATUS } from '../../utils/constants';
import { debounce } from '../../utils/helper';
import Product from './product';
import './products.css'
const ProductsList = () => {

  const [state, dispatch] = useProduct();
  const [,dispatchCart] = useCart();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({type: ACTIONS.PRODUCT_FETCHING})
        let response = await fetch("https://60b27fe162ab150017ae246f.mockapi.io/api/v1/products")
        let data = await response.json()
        dispatch({type: ACTIONS.PRODUCT_SUCCESS, data})
      } catch(error) {
        dispatch({type: ACTIONS.PRODUCT_ERROR, error,})
      }
    }
    getData()
  }, [])


  const onChecked = ({target}) => {
    dispatch({type: ACTIONS.PRODUCT_CHECKED, payload:target})
  
  }

  const handleAddToCart = (e) => {
    dispatchCart({type: ACTIONS.ADD_TO_CART, payload: data.filter((item) => item.checked)});
    dispatch({type: ACTIONS.CLEAR_SELECTED_PRODUCTS});
  }

  const handleSearch = debounce((e) => {
    console.log()
  }, 300)


  const {error, status, data}  = state;
  const isLoading = status === STATUS.IDLE || status === STATUS.PENDING;
  const isRejected = status === STATUS.REJECTED;
  const disabled = !data.filter((item) => item.checked).length;

  if(isLoading) {
    return (
      <Loading />
    )
  }
  if(isRejected || error) {
    return (
      <Info
        title="Error"
        type="error"
        message="Something went wrong, Please try again later."
      />
    )
  }

  return (
    <div className="section">
      <div className="header">
        <SearchBox handleSearch={handleSearch}/>
      </div>
      <div className="products-container ">
        {data.map((product) => <Product key={product.id} onChecked={onChecked} {...product} />)}
      </div>
      <div className="actions">
        <Button
          name="Add to cart"
          handleClick={handleAddToCart}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default ProductsList