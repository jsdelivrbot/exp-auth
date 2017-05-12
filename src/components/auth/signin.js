import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

// adpting to work on redux form v6
const signinForm = reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignIn);

export default connect (null, actions)(signinForm);
