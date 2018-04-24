import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import LoginValidators from '../../validators/loginValidator';
import axios from 'axios';
import Timezones from '../../data/timezones';
import Map from 'lodash/map';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction';

class SignupForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmpassword: '',
      email: '',
      timezone: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    //axios.post('/api/users', { user: this.state });
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors : data})
    );
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    const options = Map(Timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );

    const { errors, identifiers, password, isLoading } = this.state;

    return (

      <form onSubmit={this.onSubmit}>
        <h3>Sign in</h3><br/><br/>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChange}
            className="form-control"
            name="username"
           />
        </div>

        <div className="form-group">
          <label>Password</label><br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            className="form-control"
            name="password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label><br/>
          <input
            type="password"
            value={this.state.confirmpassword}
            onChange={this.onChange}
            className="form-control"
            name="confirmpassword"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onChange}
            className="form-control"
            name="email"
          />
        </div>

        <div className="form-group">
          <label>Timezone</label>
          <select
            className="form-control"
            name="timezone"
            value={this.state.timezone}
            onChange={this.onChange}
          >
            <option value="" disabled>Choose your Timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignupForm);
