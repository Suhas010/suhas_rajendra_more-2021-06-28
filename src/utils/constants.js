export const ACTIONS = {
  "PRODUCT_SUCCESS": "PRODUCT_SUCCESS",
  "PRODUCT_ERROR": "PRODUCT_ERROR",
  "PRODUCT_FETCHING": "PRODUCT_FETCHING",
  "ADD_TO_CART": "ADD_TO_CART",
  "REMOVE_FROM_CART": "REMOVE_FROM_CART",
  "PRODUCT_CHECKED": "PRODUCT_CHECKED",
  "CLEAR_SELECTED_PRODUCTS": "CLEAR_SELECTED_PRODUCTS"
}

export const STATUS = {
  IDLE: "IDLE",
  RESOLVED: "RESOLVED",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  REJECTED: "REJECTED",
  PENDING: "PENDING"
}

// styles
export const LIGHT = [
  '--app-background: white',
  '--text-color: black',
  '--slider-color: #00000075',
  '--section-border: red',
  '--table-row: #dddddd',
];

export const DARK = [
  '--app-background: black',
  '--text-color: white',
  '--slider-color: #f5e9e975',
  '--section-border: pink',
  '--table-row: #454328',
];
