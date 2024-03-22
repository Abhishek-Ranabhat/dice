import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./diceSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },

});

export default store