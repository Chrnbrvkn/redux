import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cashReducer'
import { customReducer } from './customReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
