import React from "react"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../images/crown.svg"
import CartIcon from "../CartIcon/cart-icon.component.jsx"
import CartDropdown from "../CartDropdown/cart-dropdown.component.jsx"
import Headroom from "react-headroom"

import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"

import "./header.styles.scss"


class Header extends React.Component {
	constructor(props){
		super(props);

		this.headerRef = React.createRef();
	}

	// componentDidMount(){
	// 	const headroom = new Headroom(this.headerRef.current, {
	// 	  "offset": 205,
	// 	  "tolerance": 5,
	// 	  "classes": {
	// 	    "initial": "animated",
	// 	    "pinned": "slideDown",
	// 	    "unpinned": "slideUp"
	// 		}
	// 	});

	// 	headroom.init();
	// }

	render(){
		return (
			<Headroom>
				<nav className="header" ref={this.headerRef}>
					<Link to="/" className="header__logo">
						<Logo />
					</Link>
					<ul className="header__list">
						<li><Link to={`/shop`}>{`shop`.toUpperCase()}</Link></li>
						<li><Link to={`/contact`}>{`contact`.toUpperCase()}</Link></li>
						{this.props.currentUser ? 
							(
								<>
									<li onClick={() => auth.signOut()}>{`signout`.toUpperCase()}</li>
									<CartIcon />
								</>
							) : 
							<li><Link to={`/signin`}>{`signin`.toUpperCase()}</Link></li>
						}
					</ul>
					{this.props.openDropdown ? <CartDropdown /> : null}
				</nav>
			</Headroom>
		)
	}
}


const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	openDropdown: state.cart.openDropdown
})

export default connect(mapStateToProps)(Header)