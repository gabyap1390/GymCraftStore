import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Navigation from '../navigation';
import Topnavigation from '../topnavigation'

import Carousel from '../../resource/nukacarousel/demo/app';

class Wishlist extends Component {

  constructor(props){
    super(props)

    this.state = {
      wishlist: {
        name: '',
        price: '',
        discount: 0
      }
    }

    this.formOnLoad = this.formOnLoad.bind(this);
  }

  formOnLoad(e) {
    this.setState(prevState => ({
      wishlist: [...prevState.array, ['1','2',3]]
    }));
  }

  componentDidMount() {
    window.addEventListener('load', this.formOnLoads);
  }

  formOnLoad() {
    this.setState(prevState => ({
      wishlist: [...prevState.array, ['1','2',3]]
    }));
  }

  render(){

    const wishListStyle = {
      marginTop: '20px'
    };

    return (

      <div style={{wishListStyle}}>
          <h3><span>Buy this game</span></h3>
          <div>
            <span>includes<b> season pass</b></span>
          </div>
          <span>SPECIAL PROMOTION! Offer ends in 32:20:20......</span>
      </div>

    );
  }
}


export default Wishlist;
