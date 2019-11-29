import React, {Component} from "react"
import sectionData from "../../jsonData/section-item"
import ProductSection from "../ProductSection/product-section.component"

import "./product-wrapper.styles.scss"

class ProductWrapper extends Component {
	constructor(){
		super();

		this.state = {
			sections: sectionData
		}
	}

	render(){
		return (
			<div className="product-wrapper">
				{this.state.sections.map(({id, ...restOfProps }) => (
					<ProductSection key={id} {...restOfProps}/>
				))}
			</div>
		)
	}
}


export default ProductWrapper