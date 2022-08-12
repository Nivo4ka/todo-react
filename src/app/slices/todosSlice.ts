import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoList, TodosState, ChangeTodo } from "./../../interfaces.js";

export const initialState: TodosState = {
  todoList: [],
  filter: "All",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const intermediate: TodoList = {
        title: action.payload,
        isActive: true,
      };
      state.todoList.push(intermediate);
    },

    changeTodo: (state, action: PayloadAction<ChangeTodo>) => {
      state.todoList[action.payload.index].title = action.payload.title;
    },

    deleteTodos: (state) => {
      state.todoList = state.todoList.filter((todo: TodoList) => todo.isActive);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoList.splice(action.payload, 1);
    },

    switchIsActiveTodo: (state, action: PayloadAction<number>) => {
      state.todoList[action.payload].isActive =
        !state.todoList[action.payload].isActive;
    },

    switchAllIsActiveTodo: (state) => {
      if (
        state.todoList.filter((todo: TodoList) => todo.isActive).length !== 0
      ) {
        state.todoList.forEach((todo: TodoList) => (todo.isActive = false));
      } else {
        if (
          state.todoList.filter((todo: TodoList) => todo.isActive).length === 0
        ) {
          state.todoList.forEach((todo: TodoList) => (todo.isActive = true));
        }
      }
    },

    setFilter: (state, action: PayloadAction<string>) => {
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
