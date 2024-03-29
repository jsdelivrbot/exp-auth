import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import dashboardReducer from './dashboard_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
