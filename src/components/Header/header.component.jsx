import React from "react"
import {Link} from "react-router-dom"
import Logo from "../../images/crown.svg"
import NavigationItems from "../../jsonData/navigation-links"

import "./header.styles.scss"

const Header = () => (
	<nav className="header">
		<Link to="/" className="header__logo">
			<img src={Logo} alt="Clothing Logo"/>
		</Link>
		<ul className="header__list">
		{NavigationItems.map(({name, link}) => (
			<li><Link to={`/${link}`}>{name.toUpperCase()}</Link></li>
		))}
		</ul>
	</nav>
)


export default Header