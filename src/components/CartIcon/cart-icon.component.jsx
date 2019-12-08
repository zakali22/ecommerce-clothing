import React from "react"
import {ReactComponent as ShoppingBag} from "../../images/shopping-bag.svg"
import {connect} from "react-redux"
import {openCartDropdown} from "../../redux/cart/cart.actions"

import "./cart-icon.styles.scss"

const CartIcon = ({openCartDropdown}) => (
	<div className="cart-icon" onClick={openCartDropdown}>
		<ShoppingBag className="cart-icon__svg"/>
		<div className="cart-icon__num">
			0
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
	openCartDropdown: () => dispatch(openCartDropdown())
})

export default connect(null, mapDispatchToProps)(CartIcon)