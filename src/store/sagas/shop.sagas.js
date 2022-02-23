import { call, put, takeLatest, all } from 'redux-saga/effects'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../actions/shop-actions'

export function* fetchCollectionsAsync() {
    // yield console.log('I am fired')
    try {
        const collectionRef = firestore.collection('collection')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest('FETCH_COLLECTIONS_START', fetchCollectionsAsync)
}

export function* shopSaga() {
    yield all([call(fetchCollectionsStart)])
}