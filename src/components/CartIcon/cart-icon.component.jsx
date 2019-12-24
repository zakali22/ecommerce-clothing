import React from "react"
import {ReactComponent as ShoppingBag} from "../../images/shopping-bag.svg"
import {connect} from "react-redux"
import {toggleCartDropdown} from "../../redux/cart/cart.actions"

import "./cart-icon.styles.scss"

const CartIcon = ({toggleCartDropdown, totalItems}) => (
	<div className="cart-icon" onClick={toggleCartDropdown}>
		<ShoppingBag className="cart-icon__svg"/>
		<div className="cart-icon__num">
			{totalItems}
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = (state) => ({
	totalItems: state.cart.cartItems.reduce((accNum, cartItem) => {
		return accNum + cartItem.quantity
	}, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)