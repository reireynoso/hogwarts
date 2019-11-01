import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import FilterComponent from './FilterComponent'

class App extends Component {

  state = {
    filterStatus: false,
    sortMethod: "",
    selected: {}
  }

  handleSelected = (pigObject) => {
    console.log(pigObject)
    this.setState({
      selected: pigObject
    })
  }

  toggleFilter = () => {
    // console.log('clicked')
    this.setState({
      filterStatus: !this.state.filterStatus
    })
  }

  filterHogs = (hogs) => {
    if(this.state.filterStatus){
      return hogs.filter(hog => hog.greased)
    }
    else{
      return hogs
    }
  }

  handleSort = (e) => {
    // console.log(e.target.value)
    this.setState({
      sortMethod: e.target.value
    })
  }

  sortHogs = (hogs) => {
    if(this.state.sortMethod === "name"){
      // hogs.sort((a,b) => {
      //   if(a > b){
      //     return 1
      //   }
      //   else if(a < b){
      //     return -1
      //   }
      //   else{
      //     0
      //   }
      // })
      return [...hogs].sort((a,b) => a.name.localeCompare(b.name))
    }
    else if(this.state.sortMethod === "weight"){
      return [...hogs].sort((a,b) => a.weight - b.weight)
    }
    else{
      return hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterComponent handleSort={this.handleSort} toggleFilter={this.toggleFilter}/>
          < HogsContainer selected={this.state.selected} handleSelected={this.handleSelected} hogs={this.sortHogs(this.filterHogs(hogs))}/>
      </div>
    )
  }
}

export default App;
