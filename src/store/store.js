import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "../store/movieoSlice";

export const store = configureStore({
  reducer: {
    movieoData: moviesReducer,
  },
});
