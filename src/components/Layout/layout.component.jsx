import React from "react"
import Header from "../Header/header.component.jsx"
import {closeCartDropdown} from "../../redux/cart/cart.actions"
import {connect} from "react-redux"

const Layout = (props) => (
	<div className="layout" onClick={e => {
		console.log(typeof e.target.parentElement.className === 'object')
		if(typeof e.target.parentElement.className !== 'object'){
			if(!e.target.parentElement.className.includes('cart-icon')){
				props.closeCartDropdown()
			}
		} else {
			props.closeCartDropdown()
		}
		// return e.target.parentElement.className ? (!e.target.parentElement.className.includes('cart-icon') ? props.closeCartDropdown() : null) : null
	}}>
		<Header currentUser={props.currentUser}/>
		{props.children}
	</div>
)

const mapDispatchToProps = dispatch => ({
	closeCartDropdown: () => dispatch(closeCartDropdown())
})

export default connect(null, mapDispatchToProps)(Layout)