import React from "react"
import CollectionOverview from "../../components/CollectionOverview/collection-overview.component.jsx"
import CategoryPage from "../CategoryPage/category-page.component.jsx"
import {Route} from "react-router-dom"
import {firestore, convertCollectionToMap} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import {fetchCollectionStartAsync} from "../../redux/collections/collections.actions"

import "./shop-page.styles.scss"

class ShopPage extends React.Component {
	componentDidMount(){
		this.props.fetchCollectionStartAsync();
	}

	render(){
		return (
			<div className="shop-page">
				<Route exact path={`${this.props.match.path}`} render={(props) => {
					return <CollectionOverview isLoading={!!this.props.collections} {...props} />
				}} />
				<Route exact path={`${this.props.match.path}/:category`} render={(props) => {
					return <CategoryPage {...props} isLoading={() => {
						console.log(this.props.collections)
						return !!this.props.collections

					}}  />
				}} />
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

const mapStateToProps = state => ({
	isFetching: state.collections.isFetching,
	collections: state.collections.collections
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)