import { useState } from "react";
import { useEffect } from "react";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function PokemonApi({ onPokemonClick }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=15"
      );
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const details = await res.json();
          return {
            name: poke.name,
            image: details.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemon(shuffleArray(pokemonDetails));
    };
    fetchPokemon();
  }, []);

  const handleClick = (pokemonName) => {
    onPokemonClick(pokemonName);
    setPokemon((prevPokemon) => shuffleArray(prevPokemon));
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='memory-card-wrapper gap-8 grid grid-cols-5 grid-rows-3'>
          {pokemon.map((poke) => (
            <div
              className='memory-card rounded-xl p-1 cursor-pointer text-center bg-[var(--main-text)] w-[280px] h-[350px]'
              key={poke.name}
              onClick={() => handleClick(poke.name)}
            >
              <img src={poke.image} className='h-auto rounded-xl bg-black' />
              <p className='py-2 text-2xl italic'>{poke.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PokemonApi;
