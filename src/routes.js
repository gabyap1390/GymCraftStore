import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Greetings from './components/pages/errorPage'
import Homepage from './components/pages/homePage';
import Products from './components/pages/productsPage';
import Gamelist from './components/pages/gamelistPage';
import Login from './components/pages/loginPage';
import Signup from './components/pages/signupPage';
import Checkout from './components/pages/checkoutPage';
import Wishlist from './components/pages/wishlistPage';
import Viewcart from './components/pages/viewcartPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route exact path='/' component={Homepage} />
    <Route exact path='/Products' component={Products} />
    <Route exact path='/Gamelist' component={Gamelist} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/Signup' component={Signup} />
    <Route exact path='/Checkout' component={Checkout} />
    <Route exact path='/Wishlist' component={Wishlist} />
    <Route exact path='/Viewcart' component={Viewcart} />
  </Route>
)
