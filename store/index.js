import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers";
import apiMiddleware from "middleware/api";
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, logger));
window.store = store;
export default store;