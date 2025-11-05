import { useDispatch, useSelector } from "react-redux"
import { deleteTodos } from "../store/todo/todoSlice"

export default function Todos(){
  const todo=useSelector(store=>store.todo)
  const dispatch=useDispatch()
  return(<>
  <ul>
    {
      
        todo?.map((item, key) => <li key={key}>{item} <button onClick={() => dispatch(deleteTodos(key))}>sil</button></li>)
    }
  </ul>
  </>)
}