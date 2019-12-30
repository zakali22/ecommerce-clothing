import React from "react"
import CollectionOverview from "../../components/CollectionOverview/collection-overview.component.jsx"
import CategoryPage from "../CategoryPage/category-page.component.jsx"
import {Route} from "react-router-dom"
import {firestore, convertCollectionToMap} from "../../firebase/firebase.utils"

import {connect} from "react-redux"
import {setCollectionsToStore} from "../../redux/collections/collections.actions"

import "./shop-page.styles.scss"

class ShopPage extends React.Component {
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
		})
	}

	render(){
		return (
			<div className="shop-page">
				<Route exact path={`${this.props.match.path}`} component={CollectionOverview} />
				<Route exact path={`${this.props.match.path}/:category`} component={CategoryPage} />
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCollectionsToStore: (collections) => dispatch(setCollectionsToStore(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)