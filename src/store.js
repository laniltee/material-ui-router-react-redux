import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import reducers from './reducers/index';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducers, middleware);

export default store;


//asnei94
//Sam1qaz@
