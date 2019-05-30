import React, { Component } from "react";
import Header from "./components/pages/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Details from "./components/Details";
import TVDetails from "./components/TVDetails";
import SearchResults from "./components/SearchResults";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:type/:id" component={Details} />
            <Route path="/tvdetails/:type/:id" component={TVDetails} />
            <Route path="/results" component={SearchResults} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
