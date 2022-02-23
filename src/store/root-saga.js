import { all, call } from 'redux-saga/effects';

import { shopSaga } from './sagas/shop.sagas';
import { userSagas } from './sagas/user.sagas';
import { cartSagas } from './sagas/cart.sagas';


export default function* rootSaga() {
    yield all([
        call(shopSaga),
        call(userSagas),
        call(cartSagas)
    ])
}