import React from "react"
import Header from "../Header/header.component.jsx"

const Layout = (props) => (
	<div className="layout">
		<Header currentUser={props.currentUser}/>
		{props.children}
	</div>
)

export default Layout