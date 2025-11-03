import { createContext, useContext, useReducer} from "react";
import { countReducer, intialCountState } from "../reducer/counter";
import { initialTodos, todoReducer } from "../reducer/todo";

const SiteContext=createContext()
function SiteContextProvider({children}){
  const [count, countDispatch] = useReducer(countReducer, intialCountState)
  const [todo, todoDispatch] = useReducer(todoReducer, initialTodos)
  const contex={
    counter:{
      countState:count,
      countDispatch
    },
    todo:{
      todoState:todo,
      todoDispatch
    }
  }
  return(
    <SiteContext.Provider value={contex}>
      {children}
    </SiteContext.Provider>
  )
}
export{
  SiteContext,
  SiteContextProvider
}