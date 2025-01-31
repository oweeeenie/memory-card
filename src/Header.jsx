import { useState } from "react";
import PokemonApi from "./PokemonApi";

function Header() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  function Game() {
    if (!clickedPokemon.includes()) {
      setScore(score);
      setClickedPokemon(clickedPokemon);
    } else {
      let newScore = setScore(score + 1);
      let newBestScore = setBestScore(bestScore + 1);
    }
  }

  return (
    <>
      <div className='header-container flex justify-between p-4 text-[var(--main-text)]'>
        <div className='left-header'>
          <h1 className='game-name text-3xl'>Pokemon Memory Game</h1>
          <p className='game-rules text-xl py-4'>
            Get points by clicking an image but don&apos;t click on any image
            more than once!
          </p>
        </div>
        <div className='right-header'>
          <p className='best-score'>Best Score: 4</p>
          <p className='score'>Score: 1</p>
        </div>
      </div>
    </>
  );
}

export default Header;
