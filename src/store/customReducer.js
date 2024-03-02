
const defaultState = {
  customers: []
}
const MANY_CUSTOMER = 'MANY_CUSTOMER'
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const customReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MANY_CUSTOMER:
      return { ...state, customers: [...state.customers, ...action.payload] }
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
    case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(c => c.id !== action.payload) }
    default:
      return state
  }
}

export const addManyCustomersAction = (payload) => ({ type: MANY_CUSTOMER, payload })
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })