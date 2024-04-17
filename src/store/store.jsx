// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../components/TodoForm"; // Import your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
