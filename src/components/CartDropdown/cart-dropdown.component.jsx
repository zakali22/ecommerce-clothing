import React, {Component} from "react"
import ShopData from "../../jsonData/shop-data"
import CustomButton from "../CustomButton/custom-button.component.jsx"
import CartItem from "../CartItem/cart-item.component.jsx"
import "./cart-dropdown.styles.scss"

import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {toggleCartDropdown, getTotalBalanceInCart} from "../../redux/cart/cart.actions"

class CartDropdown extends Component {

	componentDidMount(){
		this.props.getTotalBalanceInCart()
	}

	render(){	
		return (	
			<div className="cart-dropdown">
				<div className={`cart-dropdown__container ${!this.props.cartItems.length ? 'empty' : null}`}>
				{this.props.cartItems.length ? 
					this.props.cartItems.map(cartItem => (
						<CartItem {...cartItem}/>
					))
					:
					<span className="cart-dropdown__empty">There are no items in the cart</span>
				}	
				</div>
				<div className="cart-dropdown__total">
					<h2>Total: ${this.props.totalInCart}</h2>
				</div>
				<CustomButton 
					type="checkout-button" 
					title="Go to Checkout" 
					onClickHandler={() => {
						this.props.history.push("/checkout")
					}}
					/>
			</div>
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