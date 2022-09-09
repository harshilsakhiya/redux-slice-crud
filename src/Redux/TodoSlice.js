import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    Data: [],
  },
  reducers: {
    addTodo: function(state,action){
       state.Data.push(action.payload)
    },
    delateTodo : function (state,action){
    state.Data = state.Data.filter((item)=> item.id != action.payload)
    },
    updateTodo: function(state,action){
        state.Data.map((item)=>{
            if(item.id === action.payload.id){
                item.List = action.payload.List
            }
        })
    }
  },
});

export const { addTodo ,delateTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer;
