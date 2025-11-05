import { useDispatch } from "react-redux"
import { addMore, decrement, increment, reset } from "../store/counter/counterSlice"

export default function CounterButtons(){
const dispatch=useDispatch()
 
  return(
    <>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(reset())}>100 yap resetle</button>
      <button onClick={() => dispatch(addMore(10))}>10 artır</button>
    </>
  )
}