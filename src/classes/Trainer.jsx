import React from "react";
import TrainedPokemon from "./TrainedPokemon";

function Trainer({ name, address, trainedPokemon, remove }) {
  return (
    <section className="Trainer">
      <h3>Sac à dos</h3>
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <ul className="trainedPokemons">
        {trainedPokemon.map((pokemon, i) => (
          <TrainedPokemon
            key={i}
            id={i}
            remove={remove}
            name={pokemon.species.name}
            weight={pokemon.weight}
            src={pokemon.sprites.front_default}
          />
        ))}
      </ul>
    </section>
  );
}

export default Trainer;
