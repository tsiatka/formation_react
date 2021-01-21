import React, { Component } from "react";

class TrainedPokemon extends Component {
  constructor() {
    super(); // nécessaire pour l'héritage de classe
    // initialisation du state
    this.state = {
      exp: 0,
    };
  }
  displayName() {
    console.log("Je suis", this.props.name);
  }
  gainExp(){
    this.setState({ exp: this.state.exp+1 });
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    return (
      <li className="TrainedPokemon" onMouseMove={() => this.gainExp()} onClick={() => this.displayName()}>
        <div className="name">{name}</div>
        <div className="weight">{weight} kg</div>
        <div className="exp">{exp} xp</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
