import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Navigation from '../navigation';
import Topnavigation from '../topnavigation'

import Carousel from '../../resource/nukacarousel/demo/app';

class Gamelist extends Component {

  constructor(props){
    super(props)


    this.seeWishlistOnClick = this.seeWishlistOnClick.bind(this);
    this.viewCartOnClick = this.viewCartOnClick.bind(this);
  }

  seeWishlistOnClick(e){
    e.preventDefault();

    window.location.href="./Wishlist";
  }

  viewCartOnClick(e){
    e.preventDefault();

    window.location.href="./Viewcart";
  }

  render(){

    const leftStyle = {
      float: 'left',
      background: 'red',
      width: '63%',
      marginTop: '20px'
    };

    const rightStyle = {
      float: 'right',
      background: 'blue',
      width: '35%',
      marginTop: '20px'
    };

    return (

      <div className="container-fluid">
        <Grid>
          <Row className="show-grid">

            <Col lg={12}>
              <Topnavigation /><br/>
              <div>
                <h1>{this.props.gamename}</h1>
                <Carousel/>

                <br/>

                <div style={{ float: 'left' }}>
                  <button style={{ margin: '5px' }} className='btn btn-primary'>Follow</button>
                  <button style={{ margin: '5px' }} className='btn btn-primary'>Wishlist</button>
                  <button style={{ margin: '5px' }} className='btn btn-primary'>Checkout</button>
                </div>

                <div style={{ float: 'right' }}>
                  <button onClick={this.seeWishlistOnClick} style={{ margin: '5px' }} className='btn btn-primary'>See Wishlist</button>
                  <button onClick={this.viewCartOnClick} style={{ margin: '5px' }} className='btn btn-primary'>View Cart</button>
                </div>
              </div>

              <br/><br/>

              <div style={leftStyle}>
                <div>
                  <h3><span>Buy this game</span></h3>
                  <div>
                    <span>includes<b> season pass</b></span>
                  </div>
                  <span>SPECIAL PROMOTION! Offer ends in 32:20:20......</span>
                </div>

                <br/><br/>

                <div>
                  <h3><span>Buy this game</span></h3>
                  <div>
                    <span>includes<b> season pass</b></span>
                  </div>
                  <span>SPECIAL PROMOTION! Offer ends in 32:20:20</span>
                </div>
              </div>

              <div style={rightStyle}>
                <div>
                  <h3><span>Buy this game</span></h3>
                  <div>
                    <span>includes<b> season pass</b></span>
                  </div>
                  <span>SPECIAL PROMOTION!SPECIAL SPEC</span>
                </div>

                <br/><br/>
              </div>

            </Col>
          </Row>
        </Grid>
      </div>



    );
  }
}


export default Gamelist;
