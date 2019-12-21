import React from "react"
import CustomButton from "../../components/CustomButton/custom-button.component.jsx"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {addItemToCart, removeItemFromCart, removeProduct} from "../../redux/cart/cart.actions"

import "./checkout.styles.scss"

const Checkout = (props) => {
	return (
		<div className="checkout">
			<div className="checkout__container">
				<div className="checkout__container--wrapper">
					<ul className="checkout__header">
						<li>Product</li>
						<li>Description</li>
						<li>Quantity</li>
						<li>Price</li>
						<li>Remove</li>
					</ul>
					<div className="checkout__products-list">
						{props.cartItems.length ? (
								props.cartItems.map(({id, name, quantity, imageUrl, price}) => (
									<div className="checkout__products-list--product">
										<img src={imageUrl} alt="Product"/>
										<h2>{name}</h2>
										<div className="checkout__products-list--product__quantity">
											<span onClick={() => props.removeItemFromCart({id, name, quantity, imageUrl, price})}>&lt;</span>
											<p>{quantity}</p>
											<span onClick={() => props.addItemToCart({id, name, quantity, imageUrl, price})}>&gt;</span>
										</div>
										<h2>${price * quantity}</h2>
										<span onClick={() => props.removeProduct({id, name, quantity, imageUrl, price})}>&#10005;</span>
									</div>
								))
							) : (
								<div className="empty-container">
									<h2>You don't have any items in your cart</h2>
									<CustomButton title="Continue shopping" onClickHandler={() => props.history.push("/")} />
								</div>
							)}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
	removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
	removeProduct: (cartItem) => dispatch(removeProduct(cartItem))
})

const mapStateToProps = ({cart: {cartItems}}) => ({
	cartItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout))