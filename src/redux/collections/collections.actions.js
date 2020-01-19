import {collectionsActionTypes} from "./collections.types";
import {firestore, convertCollectionToMap} from "../../firebase/firebase.utils"
import fetch from "cross-fetch"

export const fetchCollectionSuccess = (collection) => ({
	type: collectionsActionTypes.FETCH_REQUEST_SUCCESS,
	payload: collection
})

export const fetchCollectionError = (err) => ({
	type: collectionsActionTypes.FETCH_REQUEST_ERROR,
	payload: err
})

export const fetchCollectionStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		return collectionRef.get().then(snapshot => {
			const collectionConverted = convertCollectionToMap(snapshot)
			let collectionArr = [];
			for(let collection in collectionConverted){
				collectionArr.push(collectionConverted[collection])
			}
			// console.log(collectionArr)
			return dispatch(fetchCollectionSuccess(collectionArr))
		}).catch(err => {
			console.log(err)
			dispatch(fetchCollectionError(err.message))
		})
	}
}