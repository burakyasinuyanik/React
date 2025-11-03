import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, addMore } from './store/counter/counterSlice'


function App() {
  const value=useSelector(store=>store.counter.value)
  const dispatch=useDispatch()

  return (
    <>
    <h1>App</h1>
    <h2>counter:{value}</h2>
    <button onClick={()=>dispatch(increment())}>Arttır</button>
    <button onClick={()=>dispatch(decrement())}>Azalt</button>
    <button onClick={()=>dispatch(reset())}>100 yap resetle</button>
    <button onClick={()=>dispatch(addMore(10))}>10 artır</button>
    </>
  )
}

export default App
