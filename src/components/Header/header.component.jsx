import React from "react"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../images/crown.svg"
import CartIcon from "../CartIcon/cart-icon.component.jsx"
import CartDropdown from "../CartDropdown/cart-dropdown.component.jsx"


import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"

import "./header.styles.scss"


const Header = (props) => (
	<nav className="header">
		<Link to="/" className="header__logo">
			<Logo />
		</Link>
		<ul className="header__list">
			<li><Link to={`/shop`}>{`shop`.toUpperCase()}</Link></li>
			<li><Link to={`/contact`}>{`contact`.toUpperCase()}</Link></li>
			{props.currentUser ? 
				(
					<>
						<li onClick={() => auth.signOut()}>{`signout`.toUpperCase()}</li>
						<CartIcon />
					</>
				) : 
				<li><Link to={`/signin`}>{`signin`.toUpperCase()}</Link></li>
			}
		</ul>
		{props.openDropdown ? <CartDropdown /> : null}
	</nav>
)

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	openDropdown: state.cart.openDropdown
})

export default connect(mapStateToProps)(Header)