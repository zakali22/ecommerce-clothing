import React from "react"
import CustomButton from "../../components/CustomButton/custom-button.component.jsx"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

import "./checkout.styles.scss"

const Checkout = (props) => (
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
							props.cartItems.map(cart => (
								<div className="checkout__products-list--product">
									<img src={cart.imageUrl} alt="Product Image"/>
									<h2>{cart.name}</h2>
									<div className="checkout__products-list--product__quantity">
										<span>&lt;</span>
										<p>{cart.quantity}</p>
										<span>&gt;</span>
									</div>
									<h2>${cart.price}</h2>
									<span>&#10005;</span>
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


// const mapStateToProps = state => ({
// 	cartItems: state.cart.cartItems
// })


const mapStateToProps = ({cart: {cartItems}}) => ({
	cartItems
})

export default withRouter(connect(mapStateToProps)(Checkout))