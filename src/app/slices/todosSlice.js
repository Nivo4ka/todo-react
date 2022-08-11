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

    changeTodo: (state, action) => {
      state.todoList[action.payload.index].title = action.payload.title;
    },

    deleteTodos: (state) => {
      state.todoList = state.todoList.filter((todo) => todo.isActive);
    },

    deleteTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },

    switchIsActiveTodo: (state, action) => {
      state.todoList[action.payload].isActive =
        !state.todoList[action.payload].isActive;
    },

    switchAllIsActiveTodo: (state) => {
      if (state.todoList.filter((todo) => todo.isActive).length !== 0) {
        state.todoList.forEach((todo) => (todo.isActive = false));
      } else {
        if (state.todoList.filter((todo) => todo.isActive).length === 0) {
          state.todoList.forEach((todo) => (todo.isActive = true));
        }
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  changeTodo,
  deleteTodos,
  deleteTodo,
  switchIsActiveTodo,
  switchAllIsActiveTodo,
  setFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
