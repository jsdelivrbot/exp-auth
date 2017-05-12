export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to the server
    
    // If the request is ok...
    // - Update state to indicate that the user is authenticated
    // - Save the JWT token
    // - redirect the user to "inside" the app

    // If the request is NOT ok...
    // - Show an error to the user
  }
}
