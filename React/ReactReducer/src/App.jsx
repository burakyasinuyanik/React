import { useReducer, useState } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from "./reducer/index"

function App() {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(countReducer, intialCountState)
 
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
