import React, { Component } from "react";
import TrainedPokemon from "./TrainedPokemon";

class Trainer extends Component {
  render() {
    const { name, address, trainedPokemon } = this.props;

    function displayName() {
      console.log("Je suis", name);
    }

    return (
      <section className="Trainer" onClick={displayName}>
        <h3>Sac à dos</h3>
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <ul className="trainedPokemons">
          {trainedPokemon.map((pokemon) => (
            <TrainedPokemon
              key={pokemon.species.name}
              name={pokemon.species.name}
              weight={pokemon.weight}
              src={pokemon.sprites.front_default}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Trainer;
