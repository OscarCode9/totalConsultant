import React, { Component } from 'react';
import Header from './Components/Header'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer'
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Header/>
              <Routes/>
              <Footer/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
