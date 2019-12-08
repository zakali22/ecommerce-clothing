import React from "react"
import CustomButton from "../CustomButton/custom-button.component.jsx"

import {addItemToCart} from "../../redux/cart/cart.actions"
import {connect} from "react-redux"

import "./collection-item.styles.scss"

const CollectionItem = ({id, name, imageUrl, price, addItemToCart}) => {
	const cartItem = {id, name, imageUrl, price};
	return (
		<div className="collection-item">
			<div className="collection-item__image" style={{backgroundImage: `url(${imageUrl})`}}>
				<div className="collection-item__button">
					<CustomButton type="checkout-button" title="Add to cart" onClickHandler={() => addItemToCart(cartItem)}/>
				</div>
			</div>
			<div className="collection-item__details">
				<p>{name}</p>
				<p>${price}</p>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem)