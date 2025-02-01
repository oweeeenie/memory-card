// this file HANDLES logic & prop passing WHILE rendering the components.

import { useState } from "react";
import Header from "./Header";
import PokemonApi from "./PokemonApi";

export default function Components() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  function HandlePokemonClick(pokemonName) {
    if (clickedPokemon.includes(pokemonName)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      setScore((prevScore) => prevScore + 1);
      setClickedPokemon((prevClicked) => [...prevClicked, pokemonName]);

      if (score + 1 > bestScore) {
        setBestScore((prevBestScore) => prevBestScore + 1);
      }
    }
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <PokemonApi onPokemonClick={HandlePokemonClick} />
    </>
  );
}
