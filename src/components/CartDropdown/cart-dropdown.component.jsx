import React from "react"
import ShopData from "../../jsonData/shop-data"
import CustomButton from "../CustomButton/custom-button.component.jsx"
import CartItem from "../CartItem/cart-item.component.jsx"
import "./cart-dropdown.styles.scss"

import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {toggleCartDropdown} from "../../redux/cart/cart.actions"

const CartDropdown = (props) => (
	<div className="cart-dropdown">
		<div className={`cart-dropdown__container ${!props.cartItems.length ? 'empty' : null}`}>
		{props.cartItems.length ? 
			props.cartItems.map(cartItem => (
				<CartItem {...cartItem}/>
			))
			:
			<span className="cart-dropdown__empty">There are no items in the cart</span>
		}	
		</div>
		<CustomButton 
			type="checkout-button" 
			title="Go to Checkout" 
			onClickHandler={() => {
				props.history.push("/checkout")
				props.dispatch(toggleCartDropdown())
			}}
			/>
	</div>
)

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))