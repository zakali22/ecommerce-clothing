import React from "react"
import Header from "../Header/header.component.jsx"

const Layout = (props) => (
	<div className="layout">
		<Header />
		{props.children}
	</div>
)

export default Layout