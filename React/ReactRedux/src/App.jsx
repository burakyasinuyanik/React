import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, addMore } from './store/counter/counterSlice'
import CounterButtons from './components/CounterButtons'


function App() {
  const value=useSelector(store=>store.counter.value)
  const dispatch=useDispatch()

  return (
    <>
    <h1>App</h1>
    <h2>counter:{value}</h2>
    <CounterButtons/>
    </>
  )
}

export default App
