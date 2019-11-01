import React, { Component } from 'react';
import HogTile from './HogTile'

export default class HogsContainer extends Component {
  render() {
    //   console.log(this.props.hogs)
    return (
      <div className="ui grid container">
          {
              this.props.hogs.map(hog => {
                return <HogTile selected={this.props.selected} handleSelected={this.props.handleSelected} hog={hog}/>
              })
          }
      </div>
    );
  }
}
