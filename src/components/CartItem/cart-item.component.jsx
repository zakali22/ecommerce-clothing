import React from "react"

import "./cart-item.styles.scss"

const CartItem = (props) => (
	<div className="cart-dropdown__item">
		<img src={props.imageUrl} alt="Product Image"/>
		<div className="cart-dropdown__item--data">
			<p>{props.name}</p>
			<p>{`${props.quantity} x $${props.price}`}</p>
		</div>
	</div>
)

export default CartItem