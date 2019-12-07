import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"

import Homepage from "./pages/Homepage/homepage.component.jsx"
import ShopPage from "./pages/ShopPage/shop-page.component.jsx"
import SigninAndSignupPage from "./pages/SigninPage/signin-signup.component.jsx"
import Layout from "./components/Layout/layout.component.jsx"

import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.actions"
import {auth, createUserOnDatabase } from "./firebase/firebase.utils"

// Here we define the routes and the corresponding components to render
class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){ // Check that user is not logged out
				const userRef = await createUserOnDatabase(userAuth);  // Register the user on our firebase database
				userRef.onSnapshot(snapshot => {
					this.props.setCurrentUser({
						id: snapshot.id,
						...snapshot.data() // To access the actual data set in our database
					})
				})
			} else {
				this.props.setCurrentUser(userAuth)
			}
		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
	  return (
	    <Switch>
	    	  <Layout>
			      <Route exact path="/" component={Homepage} />
			      <Route exact path="/shop" component={ShopPage} />
			      <Route exact path="/signin" render={(renderProps) => {
			      	return this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignupPage />
			      }} />
		      </Layout>
	    </Switch>
	  )
	}
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})


// We need mapDispatchToProps to call the setCurrentUser
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
	/* Similar to 
		setCurrentUser: function(user){
			return dispatch(setCurrentUser(user))
		}
	*/
})


export default connect(mapStateToProps, mapDispatchToProps)(App); // First argument is reserved for mapStateToProps
