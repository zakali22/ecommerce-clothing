import React from "react"

import "./collection-item.styles.scss"

const CollectionItem = ({name, imageUrl, price}) => (
	<div className="collection-item">
		<div className="collection-item__image" style={{backgroundImage: `url(${imageUrl})`}}>
			<div className="collection-item__button">Add to cart</div>
		</div>
		<div className="collection-item__details">
			<p>{name}</p>
			<p>${price}</p>
		</div>
	</div>
)

export default CollectionItem