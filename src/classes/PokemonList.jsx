import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonList extends Component {
  render() {
    const { data } = this.props;
    return <section className="pokedex"><h3>Pokedex</h3>
        <ul className="pokemons">
        {data.map((pokemon) => <Pokemon
            key={pokemon.species.name}
            name={pokemon.species.name}
            weight={pokemon.weight}
            src={pokemon.sprites.front_default}
          />
        )}
    </ul>
    </section>
  }
}

export default PokemonList;
