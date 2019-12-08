import React from "react"
import ShopData from "../../jsonData/shop-data"
import CustomButton from "../CustomButton/custom-button.component.jsx"
import "./cart-dropdown.styles.scss"

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-dropdown__container">
			<div className="cart-dropdown__item">
				<img src={ShopData[0].items[0].imageUrl} alt="Image"/>
				<div className="cart-dropdown__item--data">
					<p>Blue Jean Jacket</p>
					<p>3 x $90</p>
				</div>
			</div>
						<div className="cart-dropdown__item">
				<img src={ShopData[0].items[0].imageUrl} alt="Image"/>
				<div className="cart-dropdown__item--data">
					<p>Blue Jean Jacket</p>
					<p>3 x $90</p>
				</div>
			</div>
						<div className="cart-dropdown__item">
				<img src={ShopData[0].items[0].imageUrl} alt="Image"/>
				<div className="cart-dropdown__item--data">
					<p>Blue Jean Jacket</p>
					<p>3 x $90</p>
				</div>
			</div>
		</div>
		<CustomButton type="checkout-button" title="Go to Checkout"/>
	</div>
)

export default CartDropdown