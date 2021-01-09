import React, { Component } from "react";
import "./flag.css";
class Flag extends Component {
  state = {};

  //functions
  renderFlag = url => {
    return <img src={url} alt="flag" className="flagClass" />;
  };
  render() {
    return (
      <div className="container">
        {this.props.currentCountry
          ? this.renderFlag(this.props.currentCountry[0].flag)
          : null}
      </div>
    );
  }
}

export default Flag;
