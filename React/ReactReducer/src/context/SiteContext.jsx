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
    <SiteContextProvider value={contex}>
      {children}
    </SiteContextProvider>
  )
}
export{
  SiteContext,
  SiteContextProvider
}