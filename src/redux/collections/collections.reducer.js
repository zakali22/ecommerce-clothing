import {collectionsActionTypes} from "./collections.types";

const INITIAL_STATE = {
	collections: null, 
	isFetching: false, 
	errMessage: undefined
}

export default function(state = INITIAL_STATE, action){	
	switch(action.type){
		case collectionsActionTypes.FETCH_REQUEST_START:
			return {
				...state, 
				isFetching: true
			};
			break;
		case collectionsActionTypes.FETCH_REQUEST_SUCCESS:
			console.log(action.payload)
			return {
				...state,
				isFetching: false,
				collections: action.payload
			};
		case collectionsActionTypes.FETCH_REQUEST_ERROR:
			return {
				...state, 
				isFetching: false, 
				errMessage: action.payload
			};
		default:
			return INITIAL_STATE
	}
}