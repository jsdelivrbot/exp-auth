import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password, history}) {
  return function(dispatch) {
    // Submit email and password to the server
    // ES6: { email } is the same as { email: email }
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // If the request is ok...
        // - Update state to indicate that the user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect the user to "inside" the app
        history.push('/dashboard');
      })
      .catch(() => {
        // If the request is NOT ok...
        // - Show an error to the user
        dispatch(authError('Bad login info'));
      });
  }
}

export function signupUser({ email, password, history}) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				history.push('/dashboard');
			})
			.catch(error => {
				dispatch(authError(error.response.data.error));
			});
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  };
}
