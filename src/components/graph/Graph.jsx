import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Graph extends Component {
  state = {};
  //functions
  renderGraph = (data, currentCountry) => {
    const chinaPopulation = data.filter(country => country.name == "China")[0]
      .population;

    return (
      <div>
        <Doughnut
          data={{
            labels: ["china", currentCountry[0].name],
            datasets: [
              {
                label: "Households  by counties",
                data: [chinaPopulation, currentCountry[0].population],
                backgroundColor: ["red", "blue"]
              }
            ]
          }}
        />
        <p className="graphDesc">Population Comparision</p>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.props.currentCountry
          ? this.renderGraph(this.props.data, this.props.currentCountry)
          : null}
      </div>
    );
  }
}

export default Graph;
