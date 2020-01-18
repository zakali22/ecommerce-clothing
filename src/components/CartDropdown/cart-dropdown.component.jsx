import React, {Component} from "react"
import ShopData from "../../jsonData/shop-data"
import CustomButton from "../CustomButton/custom-button.component.jsx"
import CartItem from "../CartItem/cart-item.component.jsx"
// import "./cart-dropdown.styles.scss"
import {CartDropdownContainer, CartDropdownWrapper, CartDropdownTotal, CartDropdownEmpty} from "./cart-dropdown.styles.jsx"

import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {toggleCartDropdown, getTotalBalanceInCart} from "../../redux/cart/cart.actions"

class CartDropdown extends Component {

	componentDidMount(){
		this.props.getTotalBalanceInCart()
	}

	render(){	
		return (	
			<CartDropdownContainer className="cart-dropdown">
				<CartDropdownWrapper className={`${!this.props.cartItems.length ? 'empty' : null}`}>
				{this.props.cartItems.length ? 
					this.props.cartItems.map(cartItem => (
						<CartItem {...cartItem}/>
					))
					:
					<CartDropdownEmpty>There are no items in the cart</CartDropdownEmpty>
				}	
				</CartDropdownWrapper>
				<CartDropdownTotal>
					<h2>Total: ${this.props.totalInCart}</h2>
				</CartDropdownTotal>
				<CustomButton 
					type="checkout-button" 
					title="Go to Checkout" 
					onClickHandler={() => {
						this.props.history.push("/checkout")
					}}
					/>
			</CartDropdownContainer>
		)
	}
}

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems,
	totalInCart: state.cart.totalInCart
})

const mapDispatchToProps = dispatch => ({
	getTotalBalanceInCart: () => dispatch(getTotalBalanceInCart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))