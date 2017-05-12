import axios from 'axios';
import { AUTH_USER } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }, history) {
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
      });
  }
}
