import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
name:"counter",
initialState:{value:100},
reducers:{
  increment(state){
    state.value ++;
  },
  decrement(state){
    state.value--;

  },
  reset(state){
    state.value=100
  },
  addMore(state,action){
    state.value+=action.payload
  }
}

})

export const { increment, decrement, reset, addMore }=counterSlice.actions
export default counterSlice.reducer