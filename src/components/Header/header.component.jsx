import React from "react"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../images/crown.svg"
import CartIcon from "../CartIcon/cart-icon.component.jsx"
import CartDropdown from "../CartDropdown/cart-dropdown.component.jsx"
import Headroom from "react-headroom"

import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import {toggleCartDropdown} from "../../redux/cart/cart.actions"

// import "./header.styles.scss"
import {HeaderContainer, LogoContainer, NavListContainer, NavListElement} from "./header.styles.jsx"


class Header extends React.Component {
	constructor(props){
		super(props);

		this.headerRef = React.createRef();
	}

	componentDidMount(){
		this.props.dispatch(toggleCartDropdown())
	}

	render(){
		return (
			<Headroom>
				<HeaderContainer className="header" ref={this.headerRef}>
					<LogoContainer to="/" className="header__logo">
						<Logo />
					</LogoContainer>
					<NavListContainer className="header__list">
						<NavListElement><Link to={`/shop`}>{`shop`.toUpperCase()}</Link></NavListElement>
						<NavListElement><Link to={`/contact`}>{`contact`.toUpperCase()}</Link></NavListElement>
						{this.props.currentUser ? 
							(
								<>
									<NavListElement onClick={() => auth.signOut()}>{`signout`.toUpperCase()}</NavListElement>
									<CartIcon />
								</>
							) : 
							<NavListElement><Link to={`/signin`}>{`signin`.toUpperCase()}</Link></NavListElement>
						}
					</NavListContainer>
					{this.props.openDropdown ? <CartDropdown /> : null}
				</HeaderContainer>
			</Headroom>
		)
	}
}


const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	openDropdown: state.cart.openDropdown
})

export default connect(mapStateToProps)(Header)