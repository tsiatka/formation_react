import React, { Component } from "react";

class TrainedPokemon extends Component {
  constructor() {
    super(); // nécessaire pour l'héritage de classe
    // initialisation du state
    this.state = {
      exp: 0,
      nickname: ''
    };
    this.updateNickname = this.updateNickname.bind(this);
  }
  gainExp() {
    this.setState({ exp: this.state.exp + 1 });
  }

  updateNickname(e) {
    this.setState({ nickname: e.target.value});
  }

  render() {
    const { name, weight, src, id, remove } = this.props;
    const { exp, nickname } = this.state;

    return (
      <li
        className="TrainedPokemon"
        onMouseMove={() => this.gainExp()}
      >
        <div className="name">{name}</div>
        <input placeholder="donner un surnom" value={nickname} onChange={this.updateNickname}></input>
        <div className="weight">{weight} kg</div>
        <div className="exp">{exp} xp</div>
        {src && <img src={src} alt={name} />}
        <button onClick={() => remove(id)}>relacher dans Kanto</button>
      </li>
    );
  }
}

export default TrainedPokemon;
