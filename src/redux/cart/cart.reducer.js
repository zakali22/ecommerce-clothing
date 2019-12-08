import {cartActionTypes} from "./cart.types"
import {addItemToCart, incrementTotal} from "./cart.utils"

const INITIAL_STATE = {
	openDropdown: false,
	cartItems: [],
	// totalItems: 0
}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case cartActionTypes.OPEN_CART_DROPDOWN:
			return {
				...state,
				openDropdown: !state.openDropdown
			}
		case cartActionTypes.ADD_ITEM_TO_CART:
			console.log(state.cartItems, action.payload.cartItem)
			return {
				...state, 
				cartItems: addItemToCart(state.cartItems, action.payload.cartItem),
				// totalItems: incrementTotal(state.totalItems)
			}
		default: 
			return state
	}
}