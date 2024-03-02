import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addCustomerAction, removeCustomerAction } from './store/customReducer'
import { fetchCustomers } from './store/asyncActions/customers'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <>
      <div>
        <div style={{ fontSize: '3rem' }}>{cash}</div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять</button>
          <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
          <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
        </div>
        {customers.length > 0 ?
          <div>
            {customers.map((customer) => (
              <div key={customer.id}
                onClick={() => removeCustomer(customer)}
                style={{ fontSize: '2rem', border: '1px solid black', padding: 10, margin: 5 }}
              >{customer.name}</div>
            ))}
          </div>
          :
          <div style={{ fontSize: '3rem', marginTop: 20 }}>Клиенты отсутствуют</div>}
      </div>
    </>
  )
}

export default App
