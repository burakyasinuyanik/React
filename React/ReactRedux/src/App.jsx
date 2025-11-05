import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, addMore } from './store/counter/counterSlice'
import CounterButtons from './components/CounterButtons'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const value=useSelector(store=>store.counter.value)
  // const store=useSelector(store=>store)
  // console.log(store)

  return (
    <>
    <h1>App</h1>
    <Todos/>
    <hr />
    <AddTodo/>
    <hr />
    <h2>counter:{value}</h2>
    <CounterButtons/>
    </>
  )
}

export default App
