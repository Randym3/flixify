import React, { Component } from "react";
import Header from "./components/pages/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";

import store from "./store";

import Home from "./components/pages/Home";
import Details from "./components/Details";
import TVDetails from "./components/TVDetails";
import SearchResults from "./components/SearchResults";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound.js";

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<BrowserRouter>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/details/:type/:id" component={Details} />
							<Route exact path="/tvdetails/:type/:id" component={TVDetails} />
							<Route exact path="/mysearch" component={SearchResults} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound} />
						</Switch>
					</BrowserRouter>
				</div>
			</Provider>
		);
	}
}

export default App;
