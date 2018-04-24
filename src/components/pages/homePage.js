import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Navigation from '../navigation';
import Features from '../forms/features';
import News from '../forms/news';
import Specialoffers from '../forms/specialoffers';
import Topnavigation from '../topnavigation'


class Homepage extends Component {



  render() {


    return (

      <div className="container-fluid">


        <Grid>
          <Row className="show-grid">
            <Col lg={4}>
              <Navigation />
            </Col>
            <Col lg={8}>
              <Topnavigation /><br/>
              <Features />
              <News />
              <Specialoffers />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
