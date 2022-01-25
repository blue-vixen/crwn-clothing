import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { userReducer } from './reducers/user-reducer'

const rootReducer = combineReducers({
    user: userReducer
})

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
window.myStore = store