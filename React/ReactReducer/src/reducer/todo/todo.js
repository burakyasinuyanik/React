import {ADD_TODO,RESET_TODO,ROMOVE_TODO} from "./index"
import { v4 as uuidv4 } from "uuid"

export const initialTodos={
  todos:[],
  todo:""
}
export const intialTodoState =0
export const todoReducer=(state,action)=>{
  switch (action.type) {
    case ADD_TODO:
      
     return {
      ...state,
      todos:[
        ...state.todos,
        {
          id:uuidv4(),
          title:action.payload}
      ]}
      
    case ROMOVE_TODO:
      const newList=state.todos.filter(todo=>todo.id!=action.payload)
            
     return {...state,todos:newList}      
    case RESET_TODO:
      return intialTodoState
     
    default:
      return state
  }
}