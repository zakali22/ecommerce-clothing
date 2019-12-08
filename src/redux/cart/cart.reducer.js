import {cartActionTypes} from "./cart.types"

const INITIAL_STATE = {
	openDropdown: false
}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case cartActionTypes.OPEN_CART_DROPDOWN:
			return {
				...state,
				openDropdown: !state.openDropdown
			}
		default: 
			return state
	}
}