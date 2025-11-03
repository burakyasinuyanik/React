import { useReducer } from "react"
import { ADD_TODO, initialTodos, ROMOVE_TODO, todoReducer } from "./reducer/todo"
export default function AddTodo(){

  const [ state,dispatch]=useReducer(todoReducer,initialTodos)

  function handleSubmit(event){
    event.preventDefault()
    const inputValue=event.target.elements[0].value
    dispatch({type:ADD_TODO,payload:inputValue})
    
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="todo bilgisini giriniz"/>
      <button type="submit">Ekle</button>
    </form>
    <ul>

    {
    state?.todos?.map((item,key)=><li key={key}>{item.title}---{item.id}<button onClick={()=>dispatch({type:ROMOVE_TODO,payload:item.id})}>Sil</button></li>)
    }
    </ul>
    </>
  )
}