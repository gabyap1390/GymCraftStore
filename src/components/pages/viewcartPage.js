import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Navigation from '../navigation';
import Topnavigation from '../topnavigation'

import Carousel from '../../resource/nukacarousel/demo/app';

class Viewcart extends Component {

  constructor(props){
    super(props)
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
              </div>

            </Col>
          </Row>
        </Grid>
      </div>



    );
  }
}


export default Viewcart;
