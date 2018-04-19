import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../../Assets/scss/navigation.scss';
import '../../Assets/css/navigation.css';

class Navigation extends Component {

  render() {

    return (

      <div className="sidebar">
        <span className="navheader">GIFT CARDS</span>
        <nav className="sidebarnav">
          <ul>
            <li className="first">
              <Link to="/">GYMCRAFT</Link>
            </li>
          </ul>
        </nav>

        <span className="navheader">RECOMMENDED</span>
        <nav className="sidebarnav">
          <ul>
            <li className="first">
              <Link to="/">BY FRIENDS</Link>
            </li>
            <li>
              <Link to="/Products">BY CURRATORS</Link>
            </li>
            <li className="last">
              <Link to="/Products">TAGS</Link>
            </li>
          </ul>
        </nav>

        <span className="navheader">DISCOVERY QUEUES</span>
        <nav className="sidebarnav">
          <ul>
            <li className="first">
              <Link to="/">RECOMENDATIONS</Link>
            </li>
            <li>
              <Link to="/Products">NEW RELEASES</Link>
            </li>
          </ul>
        </nav>

        <span className="navheader">BROWSE CATEGORIES</span>
        <nav className="sidebarnav">
          <ul>
            <li className="first">
              <Link to="/">TOP SELLERS</Link>
            </li>
            <li>
              <Link to="/">RECENTLY UPDATED</Link>
            </li>
            <li>
              <Link to="/">NEW RELEASES</Link>
            </li>
            <li>
              <Link to="/">UPCOMING</Link>
            </li>
            <li>
              <Link to="/">SPECIALS</Link>
            </li>
            <li>
              <Link to="/">VIRTUAL REALITY</Link>
            </li>
          </ul>
        </nav>

        <span className="navheader">BROWSE BY GENRE</span>
        <nav className="sidebarnav">
          <ul>
            <li className="first">
              <Link to="/">FREE TO PLAY</Link>
            </li>
            <li>
              <Link to="/">EARLY ACCESS</Link>
            </li>
            <li>
              <Link to="/">ACTION</Link>
            </li>
            <li>
              <Link to="/">ADVENTURE</Link>
            </li>
            <li>
              <Link to="/">CASUAL</Link>
            </li>
            <li>
              <Link to="/">INDIE/MULTIPLAYER</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}

export default Navigation;
