import React from "react"
import {ReactComponent as ShoppingBag} from "../../images/shopping-bag.svg"
import {connect} from "react-redux"
import {toggleCartDropdown} from "../../redux/cart/cart.actions"
import {fetchCollectionStartAsync} from "../../redux/collections/collections.actions"

// import "./cart-icon.styles.scss"
import {CartIconContainer, CartIconNum} from "./cart-icon.styles.jsx"

const CartIcon = ({toggleCartDropdown, totalItems, fetchCollectionStartAsync}) => (
	<CartIconContainer onClick={() => {
		toggleCartDropdown()
		fetchCollectionStartAsync()
	}} className="cart-icon">
		<ShoppingBag className="cart-icon__svg"/>
		<CartIconNum>
			{totalItems}
		</CartIconNum>
	</CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown()),
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

const mapStateToProps = (state) => ({
	totalItems: state.cart.cartItems.reduce((accNum, cartItem) => {
		return accNum + cartItem.quantity
	}, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)