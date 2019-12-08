import React from "react"
import ShopData from "../../jsonData/shop-data"
import CustomButton from "../CustomButton/custom-button.component.jsx"
import CartItem from "../CartItem/cart-item.component.jsx"
import "./cart-dropdown.styles.scss"

import {connect} from "react-redux"

const CartDropdown = (props) => (
	<div className="cart-dropdown">
		<div className="cart-dropdown__container">
		{
			props.cartItems.map(cartItem => (
				<CartItem {...cartItem}/>
			))
		}	
		</div>
		<CustomButton type="checkout-button" title="Go to Checkout"/>
	</div>
)

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown)