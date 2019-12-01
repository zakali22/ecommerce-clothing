import React from "react"
import ShopData from "../../jsonData/shop-data.js"
import CollectionPreview from "../../components/CollectionPreview/collection-preview.component.jsx"

import "./shop-page.styles.scss"

class ShopPage extends React.Component {
	state = {
		collections: ShopData
	}


	render(){
		return (
			<div className="shop-page">
				<h1 className="shop-page__title">Collections</h1>
				{this.state.collections.map(({id, ...restOfProps}) => {
					return <CollectionPreview key={id} {...restOfProps} />
				})}
			</div>
		)
	}
}

export default ShopPage