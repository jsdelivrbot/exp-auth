import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {
  handleFormSubmit(values) {
    // values = { email: email, password: password } = { email, password }
		console.log(values);
    //this.props.signinUser({ email, password }, this.props.history);
  }

  renderTextInput(field) {
		const { meta: { touched, error, invalid} } = field;
		// code above is the ES6 for:
		// const touched = field.meta.touched
		// const error = field.meta.error
		// const invalid = field.meta.invalid

    return (
      <fieldset className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input}/>
				<span className={`form-msg-error ${touched && invalid ? 'show' : ''}`}>{error}</span>
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
console.log(this.props);
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

				<Field
          name="passwordConfirm"
          type="password"
          label="Confirm Password"
          component={this.renderTextInput}
        />

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function validate(values) {
	const errors = {};
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let emailRegex = regex.test(values.email);

	if (!values.email || !emailRegex) {
		errors.email = 'Enter a valid e-mail';
	}

	if (!values.password) {
		errors.password = 'Enter some password';
	}

	if (values.password !== values.passwordConfirm) {
		errors.passwordConfirm = 'Your password does not match your password confirmation';
	}

	return errors;
}

// adpting to work on redux form v6
const signupForm = reduxForm({ form: 'signupForm', validate })(SignUp);

function mapStateToProps(state) {
  return {
    errorMsg: state.auth.error
  };
}

export default connect (mapStateToProps, actions)(signupForm);
