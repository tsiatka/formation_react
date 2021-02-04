/*import React, { Component } from "react";

import PokemonList from "./classes/PokemonList";
import Trainer from "./classes/Trainer";
import Filters from "./classes/Filters";
import fetchPokemon from "./utils/fetchPokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      captured: [],
    };
    this.select = this.select.bind(this);
    this.capture = this.capture.bind(this);
    this.remove = this.remove.bind(this);
  }

  select(name) {
    this.setState({ selected: name });
  }
  capture(pokemon) {
    this.setState({ captured: [...captured, pokemon] });
  }
  remove(id) {
    let copy = [...captured];
    copy.splice(id, 1);
    this.setState({ captured: copy });
  }

  async componentDidMount() {
    const data = await fetchPokemon();
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    let types = data.flatMap((pokemon) =>
      pokemon.types.map((t) => t.type.name)
    );
    types = [...new Set(types)];

    const filteredPokemons = data.filter((pokemon) =>
      pokemon.types.map((el) => el.type.name).includes(selected)
    );

    const pokemonsListe = (
      <PokemonList
        capture={this.capture}
        data={selected ? filteredPokemons : data}
      />
    );

    const trainedPokemon = captured;

    const trainer = (
      <Trainer
        name="Sacha"
        address="Bourgpalette"
        trainedPokemon={trainedPokemon}
        remove={this.remove}
      />
    );

    const filters = <Filters types={types} select={this.select} />;

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
*/

import React, { useState, useEffect } from "react";

import PokemonList from "./classes/PokemonList";
import Trainer from "./classes/Trainer";
import Filters from "./classes/Filters";
import fetchPokemon from "./utils/fetchPokemon";

function App() {
  const [selected, setSelected] = useState("");
  const [captured, setCaptured] = useState([]);
  const [data, setData] = useState([]);

  function select(name) {
    setSelected(name);
  }
  function capture(pokemon) {
    setCaptured([...captured, pokemon]);
  }
  function remove(id) {
    let copy = [...captured];
    copy.splice(id, 1);
    setCaptured(copy);
  }

  useEffect(() => {
    fetchPokemon().then((e) => setData(e));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  let types = data.flatMap((pokemon) => pokemon.types.map((t) => t.type.name));
  types = [...new Set(types)];

  const filteredPokemons = data.filter((pokemon) =>
    pokemon.types.map((el) => el.type.name).includes(selected)
  );

  const pokemonsListe = (
    <PokemonList capture={capture} data={selected ? filteredPokemons : data} />
  );

  const trainedPokemon = captured;

  const trainer = (
    <Trainer
      name="Sacha"
      address="Bourgpalette"
      trainedPokemon={trainedPokemon}
      remove={remove}
    />
  );

  const filters = <Filters types={types} select={select} />;

  return (
    <>
      {trainer}
      {filters}
      {pokemonsListe}
    </>
  );
}

export default App;
