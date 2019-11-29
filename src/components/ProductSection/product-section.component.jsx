import React from 'react'
import "./product-section.styles.scss"
import {withRouter} from "react-router-dom"

const ProductSection = ({title, imageUrl, size, history, match, linkUrl}) => (
	<div className={`product-wrapper--item ${size ? 'large-image' : null}`}  onClick={() => history.push(`${match.url}${linkUrl}`)} >
		<div className="image-container" style={{backgroundImage: `url(${imageUrl})`}}></div>
		<div className="product-wrapper--item__content">
			<h1>{title}</h1>
			<p><a href="#">Shop now</a></p>
		</div>
	</div>
);


export default withRouter(ProductSection)