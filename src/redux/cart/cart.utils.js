// Here we define functions that are used throughout the cartReducer

export const addItemToCart = (cartArr, cartItem) => {
	const cartItemExist = cartArr.find(el => {
		return el.id === cartItem.id
	})

	if(cartItemExist){
		return cartArr.map(cartEl => {
			return cartEl.id === cartItem.id ? {
				...cartEl,
				quantity: cartEl.quantity + 1
			} : cartEl
		})
	}

	return [...cartArr, {...cartItem, quantity: 1}]
}