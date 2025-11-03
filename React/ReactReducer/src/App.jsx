import { useReducer, useState,useContext } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from "./reducer/counter/index"
import { SiteContext } from './context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddTodo from './AddTodo'

function App() {
  const {counter:{state,dispatch}}=useContext(SiteContext)
 
  return (
    <>
      <h2>Todo</h2>
      <AddTodo/>
      <hr/>
      <h2>Count:::{state}</h2>
      <button onClick={()=>dispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sıfırla</button>
      <button onClick={() => dispatch("Burak")}>Olmayani Yap</button>
      <hr />
      <ContextAboutPage/>
      <hr />
    </>
  )
}

export default App
