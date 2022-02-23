import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils"

export const fetchCollectionsStart = () => ({
    type: 'FETCH_COLLECTIONS_START',
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMsg => ({
    type: 'FETCH_COLLECTIONS_FAILURE',
    payload: errorMsg
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection')
        dispatch(fetchCollectionsStart())
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error)))
    }
}