// @ts-nocheck
import { combineReducers } from 'redux';
import appReducer from './AppReducer';
import loginReducer from './login';

const applicationReducer = combineReducers({
  appReducer,
  loginReducer,
});

export default applicationReducer;
