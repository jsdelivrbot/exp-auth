import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import Header from './components/header';
import SignIn from './components/auth/signin';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        {/*<Switch>*/}
        <Route exact path="/signin" component={SignIn} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
