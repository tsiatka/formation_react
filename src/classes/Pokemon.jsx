import React from "react";

function Pokemon({ name, weight, src, capture, pokemon }) {
  return (
    <li className="Pokemon">
      <div className="name">{name}</div>
      <div className="weight">{weight} kg</div>
      {src && <img src={src} alt={name} />}
      <button onClick={() => capture(pokemon)}>lancer une pokéball</button>
    </li>
  );
}

export default Pokemon;
