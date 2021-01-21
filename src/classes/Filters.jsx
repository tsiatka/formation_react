import React, { Component } from "react";

function Filters({ types, select }) {
  const boutons = types.map((type) => (
    <button className="filter" onClick={() => select(type)} key={type}>
      {type}
    </button>
  ));
  return (
    <div className="filters">
      <button className="filter" onClick={() => select(null)} key={null}>
        Tous les types
      </button>
      {boutons}
    </div>
  );
}

export default Filters;
