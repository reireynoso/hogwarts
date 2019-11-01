import React, { Component } from 'react';

export default class FilterComponent extends Component {
  render() {
    return (
      <div style={{height: "10vh"}}>
          <button onClick={this.props.toggleFilter}>Grease It Up</button>
          <select onChange={this.props.handleSort}>
              <option value="">ALL</option>
              <option value="name">Sort by Name</option>
              <option value="weight">Sort by Weight</option>
          </select>
      </div>
    );
  }
}
