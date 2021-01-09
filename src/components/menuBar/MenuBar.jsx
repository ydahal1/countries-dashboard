import React, { Component } from "react";
import "./menuBar.css";

class MenuBar extends Component {
  render() {
    return (
      <div className="searchForm container">
        <form className="form-inline" onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={
                this.props.searchError
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Type a country"
              id="searchBox"
              name="searchTerm"
              value={this.props.state.searchTerm}
              onChange={this.props.onChange}
            />
            <div className="invalid-feedback">Invalid Country</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {this.props.renderSuggestions()}
      </div>
    );
  }
}

export default MenuBar;
