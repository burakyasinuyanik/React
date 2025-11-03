import { useReducer, useState,useContext } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from "./reducer/counter/index"
import { SiteContext } from './context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddTodo from './AddTodo'

function App() {
  const {counter:{countState,countDispatch},todo:{todoState,todoDispatch}}=useContext(SiteContext)
 
  return (
    <>
      <h2>Todo</h2>
      <AddTodo/>
      <AddTodo/>
      <hr/>
      <h2>Count:::{countState}</h2>
      <button onClick={() => countDispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => countDispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => countDispatch(RESET)}>Sıfırla</button>
      <button onClick={() => countDispatch("Burak")}>Olmayani Yap</button>
      <hr />
      <ContextAboutPage/>
      <hr />
    </>
  )
}

export default App
