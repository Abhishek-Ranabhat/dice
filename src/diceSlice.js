import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scores: [0, 0],
  currentScore: 0,
  activePlayer: 0,
  playing: true,
  dice: 1,
};

export const diceSlice = createSlice({
  name: "dice",
  initialState,

  reducers: {
    rollDice: (state) => {
      const dice = Math.floor(Math.random() * 6) + 1;
      if (dice !== 1) {
        state.currentScore = state.currentScore + dice;
      } else {
        state.currentScore = 0;
        state.activePlayer = state.activePlayer === 0 ? 1 : 0;
      }
      state.dice = dice;
    },

    holdScore: (state) => {
      state.scores[state.activePlayer] = state.scores[state.activePlayer] + state.currentScore;
      
      state.playing = state.scores[state.activePlayer] <= 20;
      
      state.currentScore = 0;
      state.activePlayer = state.activePlayer === 0 ? 1 : 0;
    },

    newGame: () => initialState,
  },
});

export const { rollDice, holdScore, newGame } = diceSlice.actions;

export default diceSlice.reducer;
