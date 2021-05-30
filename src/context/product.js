import * as React from 'react';
import { ACTIONS, COLORS, STATUS } from '../utils/constants';
import { getRandomArbitrary } from '../utils/helper';

const ProductContext = React.createContext();

const initialProductState = {
  data: [],
  status: STATUS.IDLE,
  search: ''
}

const updateData = (arr, {id,checked}) => arr.map((item) => {
  if(item.id == id) {
    item.checked = checked;
  }
  return item;
})

function ProductProvider({ ...props}) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case ACTIONS.PRODUCT_SUCCESS: {
          return {
            ...state,
            status: STATUS.RESOLVED,
            data: action.data.map((item)=> {
              item.color = COLORS[getRandomArbitrary(0, 7)]
              return item;
            }),
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
        case ACTIONS.PRODUCT_TOGGLE: {
          return {
            ...state,
            data : updateData(state.data, action.payload)
          }
        }

        case ACTIONS.CLEAR_SELECTED_PRODUCTS: {
          return {
            ...state,
            data: state.data.map((item) => {item.checked = false; return item})
          }
        }

        case ACTIONS.FILTER_PRODUCT: {
          return {
            ...state,
            search: action.search
          }
        }
      }
    },
    initialProductState,
  )

  const value = [state, dispatch];
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