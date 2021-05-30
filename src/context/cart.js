import * as React from 'react'
import { ACTIONS, STATUS } from '../utils/constants'
const CartContext = React.createContext()

const initialCartState = {
  data: {},
}

const getCartData = (data, selectedProducts) => {
  selectedProducts.forEach(({id, ...rest}) => {
    if(data[id]) {
      data = {
        ...data,
        [id]: {
          ...data[id],
          count: data[id].count + 1
        }
      }
    } else {
      data = {
        ...data,
        [id]: {
          ...rest,
          id: id,
          count: 1
        }
      }
    }
  })
  return data;
}

function CartProvider({ ...props}) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case ACTIONS.ADD_TO_CART: {
          return {
            ...state,
            data: getCartData(state.data, action.payload)
          }
        }
        case ACTIONS.REMOVE_FROM_CART: {
          return {
            ...state,
            data: [],
            status: STATUS.REJECTED,
            error: action.error
          }
        }
        case ACTIONS.PRODUCT_FETCHING: {
          return {
            ...state,
            status: STATUS.PENDING,
          }
        }
      }
    },
    initialCartState,
  )

  const value = [state, dispatch]
  return <CartContext.Provider value={value} {...props} />
}

function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`)
  }
  return context
}

export {CartProvider, useCart}