import { useEffect, useState } from 'react';
import { useProduct } from '../../context/product';
import { ACTIONS, STATUS } from '../../utils/constants';
import Product from './product';
import './products.css'
const ProductsList = () => {
  const [state, dispatch] = useProduct()
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
  const isResolved = status === STATUS.RESOLVED;
  const isRejected = status === STATUS.REJECTED;
  if(isLoading) {
    return <h2>Loading ....</h2>
  }
  if(isRejected) {
    return <h2>Error</h2>
  }
  return (
    <div className="section products-container">
      {data.map((product) => <Product key={product.id} {...product} />)}
    </div>
  )
}

export default ProductsList