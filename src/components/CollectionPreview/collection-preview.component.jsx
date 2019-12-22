import React from "react"
import CollectionItem from "../CollectionItem/collection-item.component.jsx"
import "./collection-preview.styles.scss"

import {withRouter, Link} from "react-router-dom"

const CollectionPreview = ({title, items, routeName, match}) => (
	<div className="collection-preview">
		<div className="collection-preview__header">
			<h1 className="collection-preview__header--title">{title}</h1>
			<Link to={`${match.path}/${routeName}`} className="collection-preview__header--link">View more</Link>
		</div>
		<div className="collection-preview__wrapper">
			{items.slice(0, 4).map(({id, ...restOfProps}) => (
				<CollectionItem key={id} id={id} {...restOfProps} />
			))}
		</div>
	</div>
)

export default withRouter(CollectionPreview)