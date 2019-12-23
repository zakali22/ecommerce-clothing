import React from "react"
import CustomButton from "../CustomButton/custom-button.component.jsx"

import {addItemToCart, toggleCartDropdown, getTotalBalanceInCart} from "../../redux/cart/cart.actions"
import {connect} from "react-redux"

import "./collection-item.styles.scss"

const CollectionItem = ({id, name, imageUrl, price, ...restOfProps}) => {
	const cartItem = {id, name, imageUrl, price};
	// console.log(restOfProps.addItemToCart)
	return (
		<div className="collection-item">
			<div className="collection-item__image" style={{backgroundImage: `url(${imageUrl})`}}>
				<div className="collection-item__button">
					<CustomButton 
						type="checkout-button" 
						title="Add to cart" 
						onClickHandler={() => {
							console.log("Clicked")
							restOfProps.addItemToCart(cartItem)
							restOfProps.getTotalBalanceInCart()
						}}
						/>
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
	addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
	toggleCartDropdown: () => dispatch(toggleCartDropdown()),
	getTotalBalanceInCart: () => dispatch(getTotalBalanceInCart())
})

export default connect(null, mapDispatchToProps)(CollectionItem)