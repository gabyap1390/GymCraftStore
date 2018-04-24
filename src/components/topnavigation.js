import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom';
import '../Assets/scss/navigation.css';

class Topnavigation extends Component {
  constructor (props){
    super(props);

    this.state = {
      gamename: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode == 13){
      window.location.href="./Gamelist";

      this.setState({ gamename : this.state.gamename });
    }

    console.log("print me only");
  };

  render() {

    return (

      <div>
        <ul className="topnavigation">
          <li><a href="#home">Your Store</a></li>
          <li><a href="#news">Games</a></li>
          <li><a href="#contact">Software</a></li>
          <li><a href="#about">Hardware</a></li>
          <li><a href="#about">Videos</a></li>
          <li><a href="#about">News</a></li>

          <input
            type="text"
            className="form-group"
            placeholder="search"
            width="20px"
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
        </ul>


      </div>
    );
  }

}

export default Topnavigation;
