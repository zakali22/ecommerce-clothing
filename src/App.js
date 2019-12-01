import React from 'react';
import {Switch, Route} from "react-router-dom"

import Homepage from "./pages/Homepage/homepage.component.jsx"
import ShopPage from "./pages/ShopPage/shop-page.component.jsx"
import SigninAndSignupPage from "./pages/SigninPage/signin-signup.component.jsx"
import Layout from "./components/Layout/layout.component.jsx"

import {auth} from "./firebase/firebase.utils"

// Here we define the routes and the corresponding components to render
class App extends React.Component {

state = {
	currentUser: null
}

unsubscribeFromAuth = null;

componentDidMount(){
	this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
		this.setState({
			currentUser: user
		})
		console.log(user)
	})
}

componentWillUnmount(){
	this.unsubscribeFromAuth();
}

render(){
  return (
    <Switch>
    	  <Layout currentUser={this.state.currentUser}>
		      <Route exact path="/" component={Homepage} />
		      <Route exact path="/shop" component={ShopPage} />
		      <Route exact path="/signin" component={SigninAndSignupPage} />
	      </Layout>
    </Switch>
  )
}
}

export default App;
