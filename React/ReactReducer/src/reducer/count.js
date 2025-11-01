export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"
export const RESET="RESET"
export const initialCountState=0
export const countRecuder=(state,action)=>{
  switch (action) {
    case INCREMENT:
     return state+1
      
    case DECREMENT:
     return state-1
      
    case RESET:
     return initialState
     
    default:
      return state
  }
}