import React, { Component } from "react";

class Filters extends Component {
    render() {
        const { isElectric } = this.props;
        return (
            <button className="filter" onClick={() => this.props.displayElectric()}>{isElectric ? 'Afficher tous' : 'Filtrer electrique' }</button>
        );
      }
}

export default Filters
  