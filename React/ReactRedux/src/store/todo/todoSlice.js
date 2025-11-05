import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
const todoSlice=createSlice({
  name:"todo",
  initialState,
  reducers:{
    addTodos(state,action){
      state.unshift(action.payload)

    },
    deleteTodos(state,action){
      state=state.splice(action.payload,1)
    }
  }
})

export const { addTodos, deleteTodos }=todoSlice.actions
export default todoSlice.reducer