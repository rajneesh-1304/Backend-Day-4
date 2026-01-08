import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/slice.js';

const store = configureStore({
    reducer: {
    weathers: userReducer,
  },
});

export default store;