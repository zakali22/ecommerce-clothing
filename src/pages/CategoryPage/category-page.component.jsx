import React from "react"
import CollectionItem from "../../components/CollectionItem/collection-item.component.jsx"
import {connect} from "react-redux"

import "./category-page.styles.scss"

const CategoryPage = ({collections, match }) => {
	return (
		collections.map(category => (
			category.routeName === match.params.category ? (
				<div className="category-page" key={category.id}>
					{category.items.map(({id, ...restOfProps}) => (
						<CollectionItem key={id} id={id} {...restOfProps} />
					))}
				</div>
			) : null
		))
	)
}

const mapStateToProps = ({collections}) => ({
	collections
})

export default connect(mapStateToProps)(CategoryPage)