import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import { useCart } from '../../context/cart';
import { useProduct } from '../../context/product';
import { ACTIONS, STATUS } from '../../utils/constants';
import Product from './product';
import './products.css'
const ProductsList = () => {
  const [state, dispatch] = useProduct();
  const [,dispatchCart] = useCart()
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

  const {error, status, data}  = state;
  const isLoading = status === STATUS.IDLE || status === STATUS.PENDING;
  const isRejected = status === STATUS.REJECTED;
  const disabled = !data.filter((item) => item.checked).length
  if(isLoading) {
    return <h2>Loading ....</h2>
  }
  if(isRejected) {
    return <h2>Error</h2>
  }

  
  const onChecked = ({target: {checked, id}}) => {
    if(checked)
      dispatch({type: ACTIONS.PRODUCT_CHECKED, id})
    if(!checked)
      dispatch({type: ACTIONS.PRODUCT_UNCHECKED, id})
  }
  
  const handleAddToCart = (e) => {
    dispatchCart({type: ACTIONS.ADD_TO_CART, payload: data.filter((item) => item.checked)});
    dispatch({type: ACTIONS.CLEAR_SELECTED_PRODUCTS});
  }

  return (
    <div className="section">
      <div className="header">
        Search
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