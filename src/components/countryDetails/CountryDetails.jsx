import React, { Component } from "react";
class CountryDetails extends Component {
  state = {};

  //function
  renderCountryDetails = country => {
    return (
      <ul>
        <li>
          <span className="lists">Alpha 3 Code :</span> {country.alpha3Code}
        </li>
        <li>
          <span className="lists">Area (Sqm):</span> {country.area}
        </li>
        <li>
          <span className="lists"> Calling Codes :</span>
          {country.callingCodes.map((code, i) => (
            <span key={i}> {code}</span>
          ))}
        </li>
        <li>
          <span className="lists">Population:</span> {country.population}
        </li>
        <li>
          <span className="lists">Capital:</span> {country.capital}
        </li>
      </ul>
    );
  };
  render() {
    return (
      <div className="countryDetails">
        {this.props.currentCountry
          ? this.renderCountryDetails(this.props.currentCountry[0])
          : null}
      </div>
    );
  }
}

export default CountryDetails;
