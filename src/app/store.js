import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todosSlice from "./slices/todosSlice";
// import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
