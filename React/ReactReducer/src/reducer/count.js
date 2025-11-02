import { INCREMENT, DECREMENT, RESET } from "./actionType"
export const intialCountState =0
export const countReducer=(state,action)=>{
  switch (action) {
    case INCREMENT:
     return state+1
      
    case DECREMENT:
     return state-1
      
    case RESET:
      return intialCountState
     
    default:
      return state
  }
}