import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    filter: localStorage.getItem("filter") || "All",
  },
  reducers: {
    addTodo: (state, action) => {
      const intermediate = {
        title: action.payload,
        isActive: true,
      };
      state.todoList.push(intermediate);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    changeTodo: (state, action) => {
      console.log(action.payload);
      state.todoList[action.payload.index].title = action.payload.title;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    deleteTodos: (state) => {
      state.todoList = state.todoList.filter((todo) => todo.isActive == true);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    deleteTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    switchIsActiveTodo: (state, action) => {
      state.todoList[action.payload].isActive =
        !state.todoList[action.payload].isActive;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    switchAllIsActiveTodo: (state) => {
      if (state.todoList.filter((todo) => todo.isActive == true).length !== 0) {
        state.todoList.map((todo) => (todo.isActive = false));
      } else {
        if (
          state.todoList.filter((todo) => todo.isActive == true).length === 0
        ) {
          state.todoList.map((todo) => (todo.isActive = true));
        }
      }
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
      localStorage.setItem("filter", state.filter);
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
