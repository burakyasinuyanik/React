import { useState } from "react";

export default function Counter()
{
  const [counter,setCounter]=useState(0)
  function handleClick(){
    console.log("handle")
    setCounter(counter+1)
  }
  function subtraction(){
    setCounter(counter-1)
  }
  return (
  <>
  <h1> State</h1>
  <h2>Counter :{counter} </h2>
  <button onClick={subtraction}> counter -1</button>
  <button onClick={handleClick}>Handle Click</button>
  <button onClick={()=>setCounter(counter+2)}>iki artır</button>
  </>
  )
}