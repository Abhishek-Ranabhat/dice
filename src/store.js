import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./diceSlice";

export const store = configureStore({
  reducer: {
    game: Reducer,
  },

});

export default store