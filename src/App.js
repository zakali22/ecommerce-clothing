import React from 'react';
import {Switch, Route} from "react-router-dom"

import Homepage from "./pages/Homepage/homepage.component.jsx"
import ShopPage from "./pages/ShopPage/shop-page.component.jsx"
import Layout from "./components/Layout/layout.component.jsx"

// Here we define the routes and the corresponding components to render
const App = () => {
  return (
    <Switch>
    	  <Layout>
		      <Route exact path="/" component={Homepage} />
		      <Route exact path="/shop" component={ShopPage} />
	      </Layout>
    </Switch>
  );
}

export default App;
