import React from "react"
import CollectionItem from "../CollectionItem/collection-item.component.jsx"
import "./collection-preview.styles.scss"

const CollectionPreview = ({title, items, routeName}) => (
	<div className="collection-preview">
		<h1 className="collection-preview__title">{title}</h1>
		<div className="collection-preview__wrapper">
			{items.slice(0, 4).map(({id, ...restOfProps}) => (
				<CollectionItem key={id} id={id} {...restOfProps} />
			))}
		</div>
	</div>
)

export default CollectionPreview