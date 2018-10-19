import React, { Component } from 'react';
import Header from './Components/Header'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer'
import './bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    }
  }

  handleRouteChanged = (e) => {
    const value = e.pathname;
    this.setState({
      route: value
    })
  }
  
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Header router={this.state.route} />
              <Routes onRouteChanged={ this.handleRouteChanged } />
              <Footer/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
