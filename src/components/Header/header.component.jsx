import React from "react"
import {Link} from "react-router-dom"
import Logo from "../../images/crown.svg"
import NavigationItems from "../../jsonData/navigation-links"
import {auth} from "../../firebase/firebase.utils"

import {connect} from "react-redux"

import "./header.styles.scss"

const Header = (props) => (
	<nav className="header">
		<Link to="/" className="header__logo">
			<img src={Logo} alt="Clothing Logo"/>
		</Link>
		<ul className="header__list">
		{NavigationItems(props.currentUser).map(({name, link}) => {
			return props.currentUser ? <li onClick={() => auth.signOut()}><div>{name.toUpperCase()}</div></li> : <li><Link to={`/${link}`}>{name.toUpperCase()}</Link></li>
		})}
		</ul>
	</nav>
)


const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)