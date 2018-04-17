import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage.js';
import Products from './components/pages/products.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Products' component={Products} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
