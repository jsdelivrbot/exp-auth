import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    //console.log(values);
    this.props.signinUser({ email, password });
  }

  renderTextInput({input, label, type}) {
    return (
      <fieldset className="form-group">
        <label>{label}</label>
        <input className="form-control" type={type} {...input}/>
      </fieldset>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          name="email"
          type="text"
          label="E-mail"
          component={this.renderTextInput}
        />

        <Field
          name="password"
          type="password"
          label="Password"
          component={this.renderTextInput}
        />

        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

// adpting to work on redux form v6
const signinForm = reduxForm({ form: 'signinForm' })(SignIn);

export default connect (null, actions)(signinForm);
