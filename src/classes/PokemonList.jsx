import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ data, capture }) {
  return (
    <section className="pokedex">
      <h3>Pokedex</h3>
      <ul className="pokemons">
        {data.map((pokemon, i) => (
          <Pokemon
            key={i}
            pokemon={pokemon}
            capture={capture}
            name={pokemon.species.name}
            weight={pokemon.weight}
            src={pokemon.sprites.front_default}
          />
        ))}
      </ul>
    </section>
  );
}

export default PokemonList;
