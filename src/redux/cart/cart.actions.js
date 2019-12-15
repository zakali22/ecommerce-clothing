import {cartActionTypes} from "./cart.types"

export const openCartDropdown = () => ({
	type: cartActionTypes.OPEN_CART_DROPDOWN
})

export const closeCartDropdown = () => ({
	type: cartActionTypes.CLOSE_CART_DROPDOWN
})

export const addItemToCart = (cartItem) => ({
	type: cartActionTypes.ADD_ITEM_TO_CART,
	payload: {
		cartItem
	}
})

