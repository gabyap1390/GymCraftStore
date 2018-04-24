import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import SignupForm from '../forms/signupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction';

class SignupPage extends Component {
  render(){
    const {userSignupRequest} = this.props;

    return (


      <div className="container-fluid">
        <Grid>
          <Row className="show-grid">

            <Col lg={4}>
            </Col>
            <Col lg={4}>
              <SignupForm userSignupRequest={userSignupRequest}/>
            </Col>
            <Col lg={4}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignupPage);
