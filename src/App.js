import React from "react";

// ! import "./App.css";
import "./Components/style.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Portfolio_ReactApp from "./Components/Portfolio_ReactApp.js";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router >
          <Header/>
          <hr/>
          <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route path='/Portfolio_ReactApp' component={Portfolio_ReactApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
