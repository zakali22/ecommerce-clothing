import React from "react"
import CollectionOverview from "../../components/CollectionOverview/collection-overview.component.jsx"
import CategoryPage from "../CategoryPage/category-page.component.jsx"
import {Route} from "react-router-dom"

import "./shop-page.styles.scss"

const ShopPage = ({match}) => {
	console.log(match.path)
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route exact path={`${match.path}/:category`} component={CategoryPage} />
		</div>
	)
}

export default ShopPage