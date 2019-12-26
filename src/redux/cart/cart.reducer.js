import {cartActionTypes} from "./cart.types"
import {addItemToCart, removeItemFromCart, calculateTotal} from "./cart.utils"

const INITIAL_STATE = {
	openDropdown: false,
	cartItems: [],
	totalInCart: 0
}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case cartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				openDropdown: !state.openDropdown
			}
		case cartActionTypes.CLOSE_CART_DROPDOWN:
			return {
				...state, 
				openDropdown: false
			}
		case cartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state, 
				cartItems: addItemToCart(state.cartItems, action.payload.cartItem)
			}
		case cartActionTypes.REMOVE_ITEM_FROM_CART:
			console.log(state.cartItems, action.payload.cartItem)
			return {
				...state, 
				cartItems: removeItemFromCart(state.cartItems, action.payload.cartItem)
			}
		case cartActionTypes.REMOVE_PRODUCT:
			return {
				...state, 
				cartItems: state.cartItems.filter(item => {
					return item.id !== action.payload.cartItem.id
				})
			}
		case cartActionTypes.GET_TOTAL_BALANCE_CART: 
			return {
				...state,
				totalInCart: calculateTotal(state.cartItems)
			}
		default: 
			return state
	}
}