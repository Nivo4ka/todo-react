import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
// import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
