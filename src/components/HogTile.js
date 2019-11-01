import React, { Component } from 'react';

export default class HogTile extends Component {

    // state = {
    //     clicked: false
    // }

    slugItOut = (name) => {
        return name.toLowerCase().split(" ").join("_")
    }

    // handleClick = () => {
    //     this.setState({
    //         clicked: !this.state.clicked
    //     })
    // }
  render() {
    //   console.log(this.props.hog)
    return (
      <div onClick={() => this.props.handleSelected(this.props.hog)} className="ui eight wide column">
          <h1>{this.props.hog.name}</h1>
          <img alt={this.props.hog.name} src={`/hog-imgs/${this.slugItOut(this.props.hog.name)}.jpg`}/>

        {/* {
            this.state.clicked ? 
            <div>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Specialty: {this.props.hog.specialty}</p>
            </div>
            :
            null
        } */}

        {
            this.props.selected === this.props.hog ? 
            <div>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Specialty: {this.props.hog.specialty}</p>
            </div>
            :
            null
        }

      </div>
    );
  }
}
