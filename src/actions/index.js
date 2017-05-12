import axios from 'axios';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to the server
    axios.post(`${API_URL}/signin`, { email, password });
    // ES6: { email } is the same as { email: email }

    // If the request is ok...
    // - Update state to indicate that the user is authenticated
    // - Save the JWT token
    // - redirect the user to "inside" the app

    // If the request is NOT ok...
    // - Show an error to the user
  }
}
