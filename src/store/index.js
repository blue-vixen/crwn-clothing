import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { userReducer } from './reducers/user-reducer'
import { cartReducer } from "./reducers/cart-reducer";
import { persistReducer } from 'redux-persist';
import { directoryReducer } from "./reducers/directory-reducer";
import { shopReducer } from "./reducers/shop-reducer";
import storage from 'redux-persist/lib/storage';
import createSagaMiddleWare from 'redux-saga';

import rootSaga from './root-saga'


const sagaMiddleWare = createSagaMiddleWare()
const middlewares = [sagaMiddleWare]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})


export const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(...middlewares))

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store);
window.myStore = store
