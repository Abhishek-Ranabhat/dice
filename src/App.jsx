import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { rollDice, holdScore, newGame } from "./diceSlice";

import dice1 from "./images/dice-1.png";
import dice2 from "./images/dice-2.png";
import dice3 from "./images/dice-3.png";
import dice4 from "./images/dice-4.png";
import dice5 from "./images/dice-5.png";
import dice6 from "./images/dice-6.png";

function App() {
  const dispatch = useDispatch();
  const { scores, currentScore, activePlayer, playing, dice } = useSelector(
    (state) => state.game
  );
  const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

  return (
    <main>
      {[0, 1].map((player) => (
        <section
          key={player}
          className={`player player--${player} ${
            activePlayer === player ? "player--active" : ""
          }`}
        >
          <h2 className="name" id={`name--${player}`}>{`Player ${
            player + 1
          }`}</h2>
          <p className="score" id={`score--${player}`}>
            {scores[player]}
          </p>
          {activePlayer === player && (
            <div className="current">
              <p className="current-label">Current</p>
              <p className="current-score" id={`current--${player}`}>
                {currentScore}
              </p>
            </div>
          )}
        </section>
      ))}

      {playing && (
        <img src={diceImages[dice]} alt={`Dice ${dice}`} className="dice" />
      )}

      <button
        className="btn btn--roll"
        onClick={() => dispatch(rollDice())}
        disabled={!playing}
      >
        Roll Dice
      </button>
      <button
        className="btn btn--hold"
        onClick={() => dispatch(holdScore())}
        disabled={!playing}
      >
        Hold
      </button>
      <button className="btn btn--new" onClick={() => dispatch(newGame())}>
        New Game
      </button>
    </main>
  );
}

export default App;
