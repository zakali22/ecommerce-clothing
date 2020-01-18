import {collectionsActionTypes} from "./collections.types";
import {firestore, convertCollectionToMap} from "../../firebase/firebase.utils"

export const fetchCollectionStart = () => {
	return {
		type: collectionsActionTypes.FETCH_REQUEST_START
	}
}

export const fetchCollectionSuccess = (collection) => {
	console.log(collection)
	return {
		type: collectionsActionTypes.FETCH_REQUEST_SUCCESS,
		payload: collection
	}
}

export const fetchCollectionError = (err) => ({
	type: collectionsActionTypes.FETCH_REQUEST_ERROR,
	payload: err
})

export const fetchCollectionStartAsync = () => {
	console.log("Fetching")
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		console.log(collectionRef.get())
		dispatch(fetchCollectionStart())
		collectionRef.get().then(snapshot => {
			const collectionConverted = convertCollectionToMap(snapshot)
			let collectionArr = [];
			for(let collection in collectionConverted){
				collectionArr.push(collectionConverted[collection])
			}
			// console.log(collectionArr)
			dispatch(fetchCollectionSuccess(collectionArr))
		}).catch(err => {
			console.log(err)
			dispatch(fetchCollectionError(err.message))
		})
	}
}