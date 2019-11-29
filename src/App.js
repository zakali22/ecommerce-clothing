import React from 'react';
import {Switch, Route} from "react-router-dom"

import Homepage from "./pages/Homepage/homepage.component.jsx"
import ShopPage from "./pages/ShopPage/shop-page.component.jsx"

// Here we define the routes and the corresponding components to render
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
