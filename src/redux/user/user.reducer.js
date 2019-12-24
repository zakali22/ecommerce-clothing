import {userActionTypes} from "./user.types";

// Setup an initial state 
const INITIAL_STATE = {
	currentUser: null
}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case userActionTypes.SET_CURRENT_USER:
			return {
				...state, 
				currentUser: action.payload
			}
		default: 
			return state
	}
}