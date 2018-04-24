import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import LoginForm from '../forms/loginForm';
import {
  Link
} from 'react-router-dom';

class Login extends Component {
  render(){
    return (

      <div className="container-fluid">
        <Grid>
          <Row className="show-grid">

            <Col lg={5}>

              <LoginForm />

            </Col>

            <Col lg={3}>

              <div className="form-group">
                <Link className="btn btn-primary" to="/Signup">Sign up</Link>
              </div>
            </Col>

            <Col lg={4}>
              <h3>Why join Gymcraft</h3>

              <ul>
                <li>Buy and download full retail game</li>
                <li>Join Gymcraft community</li>
                <li>Chat with friends while gaming</li>
                <li>Play your game on any platform</li>
                <li>Schedule a game, tournament</li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>



    );
  }
}
export default Login;
