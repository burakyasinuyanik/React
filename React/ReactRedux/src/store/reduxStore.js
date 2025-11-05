import  {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
import todoReduser from "./todo/todoSlice"
export const store =configureStore({
  reducer:{
    counter:counterReducer,
    todo:todoReduser
  }
})