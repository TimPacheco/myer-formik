import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers/loginReducer';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  loginReducer,
  composeEnhancers(applyMiddleware(thunk))
 );

export default store;