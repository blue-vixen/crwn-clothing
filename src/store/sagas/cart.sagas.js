import { all, call, takeLatest, put } from 'redux-saga/effects'
import { clearCart } from '../actions/cart-actions'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest('SIGN_OUT_SUCCESS', clearCartOnSignOut)
}

export function* cartSagas() {
    yield (all([onSignOutSuccess]))
}