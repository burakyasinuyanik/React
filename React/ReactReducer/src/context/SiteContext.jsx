import { createContext, useContext, useReducer} from "react";
import { countReducer, intialCountState } from "../reducer";

const SiteContext=createContext()
function SiteContextProvider({children}){
  const [count, dispatch] = useReducer(countReducer, intialCountState)
  const contex={
    counter:{
      state:count,
      dispatch
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