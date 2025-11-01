import { useReducer, useState } from 'react'
import { countRecuder, DECREMENT, INCREMENT, initialCountState, RESET } from './reducer/count'

function App() {
  // const [count, setCount] = useState(0)
  const [count,dispatch]=useReducer(countRecuder,initialCountState)
 
  return (
    <>
      <h2>Count:::{count}</h2>
      <button onClick={()=>dispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sıfırla</button>
    </>
  )
}

export default App
