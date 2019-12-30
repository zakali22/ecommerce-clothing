import {collectionsActionTypes} from "./collections.types";

export const setCollectionsToStore = (collections) => {
	console.log(collections)
	return {
		type: collectionsActionTypes.SET_COLLECTIONS_TO_STORE,
		payload: collections
	}
}