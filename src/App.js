import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/homepage.component";

const HatsPage = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Hats Page</h1>
			<Link to="/shop">HomePage</Link>
		</div>
	);
};

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/shop" component={HomePage} />
				<Route exact path="/shop/hats" component={HatsPage} />
			</Switch>
		</div>
	);
};

export default App;
