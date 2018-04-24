import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import './Assets/css/bootstrap.min.css';
import './Assets/css/default.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/productsPage';
import Gamelist from './components/pages/gamelistPage';
import Login from './components/pages/loginPage';
import Signup from './components/pages/signupPage';
import Checkout from './components/pages/checkoutPage';
import Wishlist from './components/pages/wishlistPage';
import Viewcart from './components/pages/viewcartPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/Gamelist' component={Gamelist} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Checkout' component={Checkout} />
            <Route exact path='/Wishlist' component={Wishlist} />
            <Route exact path='/Viewcart' component={Viewcart} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
