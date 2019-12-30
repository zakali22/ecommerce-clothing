import React from "react"
import CollectionOverview from "../../components/CollectionOverview/collection-overview.component.jsx"
import CategoryPage from "../CategoryPage/category-page.component.jsx"
import {Route} from "react-router-dom"
import {firestore, convertCollectionToMap} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import {setCollectionsToStore} from "../../redux/collections/collections.actions"
import SpinnerHOC from "../../components/SpinnerHOC/spinner-hoc.component.jsx"

import "./shop-page.styles.scss"


// Wrap the Child components with the Spinner
const CollectionOverviewWithSpinner = SpinnerHOC(CollectionOverview);
const CategoryPageWithSpinner = SpinnerHOC(CategoryPage)

class ShopPage extends React.Component {
	state = {
		isLoading: true
	}


	unsubscribeFromSnapshot = null; // A variable that we need to set when fetching data from Firebase, which we will call when componentWillUnmount()

	componentDidMount(){
		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshot) => {
			const collectionConverted = convertCollectionToMap(snapshot)
			let collectionArr = [];
			for(let collection in collectionConverted){
				collectionArr.push(collectionConverted[collection])
			}

			this.props.setCollectionsToStore(collectionArr)
			this.setState({
				isLoading: false
			})
		})
	}

	render(){
		return (
			<div className="shop-page">
				<Route exact path={`${this.props.match.path}`} render={(props) => {
					return <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props} />
				}} />
				<Route exact path={`${this.props.match.path}/:category`} render={(props) => {
					return <CategoryPageWithSpinner {...props} isLoading={this.state.isLoading}  />
				}} />
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCollectionsToStore: (collections) => dispatch(setCollectionsToStore(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)