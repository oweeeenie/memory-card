import { useState } from "react";
import { useEffect } from "react";
// https://pokeapi.co/api/v2/pokemon?limit=15

function PokemonApi() {
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
      setPokemon(pokemonDetails);
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <div className='flex justify-center'>
        <div className='memory-card-wrapper gap-8 grid grid-cols-5 grid-rows-3'>
          {pokemon.map((poke, index) => (
            <div
              className='memory-card rounded-xl p-1 cursor-pointer text-center bg-[var(--main-text)] w-[280px] h-[350px]'
              key={index}
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
