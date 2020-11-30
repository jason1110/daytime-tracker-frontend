import { Component } from 'react'
import DayTable from './components/DayTable.js'

import './App.css';

class App extends Component {

  state = {
    day: [],
    image: ""
  }

  componentDidMount(){
    this.getSunrise() 
  }

  getSunrise = () => {
    fetch('http://localhost:3000/days')
      .then(response => response.json())
      .then(days => this.setState({
          day: days.day
        }))
    }

  render(){
    console.log(this.state.day)
    return (
      <div className="App">
        <h1> Day Tracker </h1>
        <DayTable day={this.state.day} image={this.state.image} />
      </div>
    );
  }
}

export default App;
