import {cartActionTypes} from "./cart.types"

export const toggleCartDropdown = () => ({
	type: cartActionTypes.TOGGLE_CART_DROPDOWN
})

// export const closeCartDropdown = () => ({
// 	type: cartActionTypes.CLOSE_CART_DROPDOWN
// })

export const addItemToCart = (cartItem) => ({
	type: cartActionTypes.ADD_ITEM_TO_CART,
	payload: {
		cartItem
	}
})

export const removeItemFromCart = (cartItem) => ({
	type: cartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: {
		cartItem
	}
})

export const removeProduct = cartItem => ({
	type: cartActionTypes.REMOVE_PRODUCT,
	payload: {
		cartItem
	}
})

export const getTotalBalanceInCart = () => ({
	type: cartActionTypes.GET_TOTAL_BALANCE_CART
})