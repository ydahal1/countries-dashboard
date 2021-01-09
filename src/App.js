import React, { Component } from "react";

import "./App.css";
import MenuBar from "./components/menuBar/MenuBar";
import Flag from "./components/flag/Flag";
import CountryName from "./components/countryName/CountryName";
import CountryDetails from "./components/countryDetails/CountryDetails";
import Graph from "./components/graph/Graph";
import Weather from "./components/weather/Weather";

const axios = require("axios");

class App extends Component {
  state = {
    searchTerm: "",
    suggestions: [],
    data: [],
    currentCountry: null,
    searchError: null
  };

  //functions
  onChange = e => {
    // console.log(this.state.data);
    let suggestions = [];
    let searchTerm = e.target.value;
    let regExp = new RegExp(`^${searchTerm}`, "i");
    // suggestions = countries.sort().filter(country => regExp.test(country));
    suggestions = this.state.data.filter(country => regExp.test(country.name));
    this.setState({
      suggestions,
      searchTerm: searchTerm
    });
  };

  //Render suggestion function
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return suggestions.map((suggestion, i) => (
      <li onClick={this.selectCountry} key={i} id={i}>
        {suggestion.name}
      </li>
    ));
  }

  //select from suggestions
  selectCountry = e => {
    const id = e.target.id;
    this.setState({
      searchTerm: this.state.suggestions[id].name,
      suggestions: []
    });
  };

  //On submit
  onSubmit = e => {
    const { data } = this.state;
    const { searchTerm } = this.state;
    e.preventDefault();
    let currentCountry = data.filter(country => country.name == searchTerm);
    if (currentCountry.length < 1) {
      this.setState({
        searchError: "Cannot find country. Try again",
        currentCountry: null
      });
    } else {
      this.setState({
        currentCountry,
        searchError: null,
        suggestions: [],
        searchTerm: ""
      });
      this.getWeatherInfo(currentCountry[0].capital);
    }
  };

  //componnent did mount
  componentDidMount() {
    this.getCountriesDetail();
  }

  //Make axios call
  getCountriesDetail() {
    // Make a request for a user with a given ID
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        // handle success
        this.setState({ data: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  getWeatherInfo = place => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${place}&appid=0c8d6628dda44930d3b99b97f1c792c4&units=imperial`
      )
      .then(response => {
        // handle success
        this.setState({ weatherdata: response });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-4  sideBar1">
            <div className="row flagAra">
              <Flag currentCountry={this.state.currentCountry} />
            </div>
            <div className="row searchAra">
              <MenuBar
                state={this.state}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                renderSuggestions={this.renderSuggestions}
                selectCountry={this.selectCountry}
                searchError={this.state.searchError}
              />
            </div>
          </div>
          <div className="col-8  mainArea">
            <div className="row countryTitle justify-content-center">
              <CountryName currentCountry={this.state.currentCountry} />
            </div>
            <div className="row ">
              <div className=" col-6 countryDetails d-flex align-items-baseline">
                <CountryDetails currentCountry={this.state.currentCountry} />
              </div>
              <div className=" col-6 ">
                <div className="row app2">
                  <Graph
                    data={this.state.data}
                    currentCountry={this.state.currentCountry}
                  />
                </div>
              </div>
            </div>
            <div className="weatherRow justify-content-center">
              <Weather
                currentCountry={this.state.currentCountry}
                weatherdata={this.state.weatherdata}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
