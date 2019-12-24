import React from "react"
import ProductSection from "../ProductSection/product-section.component"

import {connect} from "react-redux"

import "./product-wrapper.styles.scss"

const ProductWrapper = ({sections}) => {
	return (
		<div className="product-wrapper">
			{sections.map(({id, ...restOfProps }) => (
				<ProductSection key={id} {...restOfProps}/>
			))}
		</div>
	)
}

const mapStateToProps = ({directory: {sections}}) => ({
	sections
})

export default connect(mapStateToProps)(ProductWrapper)