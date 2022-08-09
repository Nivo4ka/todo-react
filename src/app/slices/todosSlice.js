import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    filter: "All",
  },
  reducers: {
    addTodo: (state, action) => {
      const intermediate = {
        title: action.payload,
        isActive: true,
      };
      state.todoList.push(intermediate);
    },
    deleteTodos: (state) => {
      state.todoList.filter((todo) => todo.isActive == true);
    },
    deleteTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    switchIsActiveTodo: (state, action) => {
      state.todoList[action.payload] = !state.todoList[action.payload];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodos,
  deleteTodo,
  switchIsActiveTodo,
  setFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
