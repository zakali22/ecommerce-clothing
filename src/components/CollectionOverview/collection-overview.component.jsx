import React from "react"
import CollectionPreview from "../../components/CollectionPreview/collection-preview.component.jsx"
import {connect} from "react-redux"

import "./collection-overview.styles.scss"

const CollectionOverview = ({collections}) => {
	return (
		<div className="collection-overview">
		<h1 className="collection-overview__title">Collections</h1>
		{collections.map(({id, ...restOfProps}) => {
			return <CollectionPreview key={id} {...restOfProps} />
		})}
		</div>
	)
}

const mapStateToProps = ({collections}) => ({
	collections
})

export default connect(mapStateToProps)(CollectionOverview)