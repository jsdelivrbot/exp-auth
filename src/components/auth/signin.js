import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    // values = { email: email, password: password } = { email, password }
    this.props.signinUser({ email, password }, this.props.history);
  }

  renderTextInput({input, label, type}) {
    return (
      <fieldset className="form-group">
        <label>{label}</label>
        <input className="form-control" type={type} {...input}/>
      </fieldset>
    );
  }

  renderAlert() {
    if (this.props.errorMsg) {
      return (
        <div className="alert alert-danger">{this.props.errorMsg}</div>
      );
    }
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
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

// adpting to work on redux form v6
const signinForm = reduxForm({ form: 'signinForm' })(SignIn);

function mapStateToProps(state) {
  return {
    errorMsg: state.auth.error
  };
}

export default connect (mapStateToProps, actions)(signinForm);
