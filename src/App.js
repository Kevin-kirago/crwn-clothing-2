import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and -sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
};

export default App;
