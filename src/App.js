import { Component } from 'react'
import DayTable from './components/DayTable.js'

import './App.css';

class App extends Component {

  state = {
    day: []
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
        <h1>Sunrise Sunset tracker</h1>
        <DayTable day={this.state.day} />
      </div>
    );
  }
}

export default App;
