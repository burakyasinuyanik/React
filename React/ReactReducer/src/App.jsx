import { useReducer, useState,useContext } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from "./reducer/index"
import { SiteContext } from './context/SiteContext'

function App() {
  const {counter}=useContext(SiteContext)
 
  return (
    <>
      <h2>Count:::{count}</h2>
      <button onClick={()=>dispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sıfırla</button>
      <button onClick={() => dispatch("Burak")}>Olmayani Yap</button>
    </>
  )
}

export default App
