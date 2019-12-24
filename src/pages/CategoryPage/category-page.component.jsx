import React from "react"
import CollectionItem from "../../components/CollectionItem/collection-item.component.jsx"
import {connect} from "react-redux"

import "./category-page.styles.scss"

const CategoryPage = ({collections, match }) => {
	return (
		collections.map(category => (
			category.routeName === match.params.category ? (
				<div className="category-page" key={category.id}>
					<h1 className="category-page__title">{category.title}</h1>
					<div className="category-page__wrapper">
					{category.items.map(({id, ...restOfProps}) => (
						<CollectionItem key={id} id={id} {...restOfProps} />
					))}
					</div>
				</div>
			) : null
		))
	)
}

const mapStateToProps = ({collections}) => ({
	collections
})

export default connect(mapStateToProps)(CategoryPage)