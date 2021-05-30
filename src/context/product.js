import * as React from 'react'
import { ACTIONS, STATUS } from '../utils/constants'
const ProductContext = React.createContext()

const initialProductState = {
  data: [],
  selected: [],
  status: STATUS.IDLE
}

function ProductProvider({ ...props}) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case ACTIONS.PRODUCT_SUCCESS: {
          return {
            ...state,
            status: STATUS.RESOLVED,
            data: action.data,
          }
        }
        case ACTIONS.PRODUCT_ERROR: {
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
        case ACTIONS.PRODUCT_CHECKED: {
          return {
            ...state,
            selected : [...state.selected, action.payload]
          }
        }
        case ACTIONS.PRODUCT_UNCHECKED: {
          let { selected } = state;
          return {
            ...state,
            selected: selected.filter(({id}) => id !== action.id)
          }
        }
      }
    },
    initialProductState,
  )

  const value = [state, dispatch]
  return <ProductContext.Provider value={value} {...props} />
}

function useProduct() {
  const context = React.useContext(ProductContext)
  if (context === undefined) {
    throw new Error(`useProduct must be used within a ProductProvider`)
  }
  return context
}

export {ProductProvider, useProduct}