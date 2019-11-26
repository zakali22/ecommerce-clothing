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
				{this.state.sections.map(({title, imageUrl, size, id}) => (
					<ProductSection key={id} title={title} imageUrl={imageUrl} size={size}/>
				))}
			</div>
		)
	}
}


export default ProductWrapper