import React, { Component } from "react";
import axios from "axios";
class Weather extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.weatherdata
            ? "Temperature : " + this.props.weatherdata.data.main.temp + " F"
            : null}{" "}
        </div>
      </div>
    );
  }
}

export default Weather;
