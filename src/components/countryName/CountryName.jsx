import React, { Component } from "react";
import "./countryName.css";
class CountryName extends Component {
  state = {};

  //functions
  renderCountryName = country => {
    return (
      <div>
        <h2>{country.name}</h2>
        <h6>{country.nativeName}</h6>
      </div>
    );
  };

  render() {
    return (
      <div className="countryDispaly">
        {this.props.currentCountry
          ? this.renderCountryName(this.props.currentCountry[0])
          : null}
      </div>
    );
  }
}

export default CountryName;

// this.renderCountryName(this.props.currentCountry[0].name)
