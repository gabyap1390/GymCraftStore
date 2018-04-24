import React, { Component } from 'react';
import LoginValidators from '../../validators/loginValidator';
//import { connect } from 'react-redux';
//import { login } from '../../action/login'

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid(){
    const {errors, isValid} = LoginValidators(this.state);

    if (isValid){
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e){
    e.preventDefault();

    if (this.isValid()){
      this.setState({ errors: {}, isLoading: true});
      /*this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({error: err.data.errors, isLoading: false})
      );*/
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    const { errors, username, password, isLoading } = this.state;

    return (

      <form onSubmit={this.onSubmit}>
        <h3>Sign in</h3><br/><br/>

        <div className="form-group">
          <label>Gymcraft account name</label>
          <input type="text" placeholders="username" className="form-control" width="150px" onChange={this.onChange} value={this.state.username} name='username' />
        </div>

        <div className="form-group">
          <label>Password</label><br/>
          <input type="password" placeholders="username" className="form-control" width="150px" />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Log In</button>
        </div>
      </form>
    );
  }
}

/*LoginForm.contextTypes = {
  login: React.proptypes.object.isRequired
}

LoginForm.propTypes = {
  login: React.propTypes.func.isRequired
}*/

export default LoginForm;
//export default connect(null, {login})(LoginForm);
