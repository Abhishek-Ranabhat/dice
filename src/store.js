import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./diceSlice";

export const store = configureStore({
  reducer: {
    dice: Reducer,
  },
});

export default store;
