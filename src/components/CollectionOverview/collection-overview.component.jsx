import React from "react"
import CollectionPreview from "../../components/CollectionPreview/collection-preview.component.jsx"
import {connect} from "react-redux"
import SpinnerHOC from "../SpinnerHOC/spinner-hoc.component.jsx"

import "./collection-overview.styles.scss"

const CollectionOverview = (props) => {
	console.log(props)
	return (
		<div className="collection-overview">
		<h1 className="collection-overview__title">Collections</h1>
		{props.collections.map(({id, ...restOfProps}) => {
			return <CollectionPreview key={id} {...restOfProps} />
		})}
		</div>
	)
}

const mapStateToProps = ({collections}) => ({
	collections: collections.collections
})

export default connect(mapStateToProps)(SpinnerHOC(CollectionOverview))