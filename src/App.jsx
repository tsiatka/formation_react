import React, { Component } from "react";

import PokemonList from "./classes/PokemonList";
import Trainer from "./classes/Trainer";
import Filters from "./classes/Filters";

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      isElectric: false,
    };
  }
  displayElectric(){
    this.setState({ isElectric: !this.state.isElectric });
  }
  render() {
    const { data } = this.props;
    const electricPokemons = data.filter((pokemon) => pokemon.types.find(el => el.type.name === 'electric'));
    const pokemonsListe = <PokemonList data={this.state.isElectric ? electricPokemons : data  }/>;
    const trainer = (
      <Trainer
        name="Sacha"
        address="Bourgpalette"
        trainedPokemon={[data[0], data[5], data[24], data[16], data[6]]}
      />
    );
    const filters = <Filters displayElectric={()=>this.displayElectric()} isElectric={this.state.isElectric} />;
    return (
      <>
        {trainer}
        {filters}
        {pokemonsListe}
      </>
    );
  }
}

export default App;
