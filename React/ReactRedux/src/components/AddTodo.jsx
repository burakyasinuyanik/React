import { useDispatch } from "react-redux"
import { addTodos } from "../store/todo/todoSlice"

export default function AddTodo(){

  const dispatch=useDispatch()
  function handleSubmit(e){
    e.preventDefault()
    const inputValue=e.target.elements[0].value
    
    dispatch(addTodos(inputValue))
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="todo bilgisi giriniz." />
      <button type="submit">ekle</button>
    </form>
    </>
  )
}