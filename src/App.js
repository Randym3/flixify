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

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/flixify" component={Home} />
              <Route
                exact
                path="/flixify/details/:type/:id"
                component={Details}
              />
              <Route
                exact
                path="/flixify/tvdetails/:type/:id"
                component={TVDetails}
              />
              <Route exact path="/flixify/mysearch" component={SearchResults} />
              <Route exact path="/flixify/about" component={About} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
