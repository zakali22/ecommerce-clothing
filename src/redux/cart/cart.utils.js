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


export const removeItemFromCart = (cartArr, cartItem) => {
	const cartItemExist = cartArr.find(el => {
		return el.id === cartItem.id
	}) // This actually returns the object found

	if(cartItemExist.quantity === 1){
		return cartArr.filter(el => (
			el.id !== cartItemExist.id
		))
	} else {
		return cartArr.map(el => (
			el.id === cartItemExist.id ? {
				...el, 
				quantity: el.quantity - 1
			} : el
		))
	}

}

export const calculateTotal = (cartArr) => {
	return cartArr.map((cartEl) => {
	  return {
	    price: cartEl.price,
	    quantity: cartEl.quantity
	  }
	}).reduce((accumulateQuantity, cartEl) => {
	    return accumulateQuantity + (cartEl.price * cartEl.quantity)
	}, 0)
}