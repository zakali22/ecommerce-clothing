import React from 'react'
import "./product-section.styles.scss"

const ProductSection = ({title, imageUrl, size}) => (
	<div className={`product-wrapper--item ${size ? 'large-image' : null}`}>
		<div className="image-container" style={{backgroundImage: `url(${imageUrl})`}}></div>
		<div className="product-wrapper--item__content">
			<h1>{title}</h1>
			<p><a href="#">Shop now</a></p>
		</div>
	</div>
);


export default ProductSection