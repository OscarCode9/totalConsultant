import React, { Component } from 'react';
import Header from './Components/Header'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer'
import './bootstrap.css';
import {ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
              position='top-right'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggablePercent={100}
              draggable
              pauseOnHover
            />
            <Routes onRouteChanged={this.handleRouteChanged} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
