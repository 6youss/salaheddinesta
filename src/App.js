import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React from "react";

// ! import "./App.css";
import "./Components/style.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Portfolio_ReactApp from "./Components/Portfolio_ReactApp.js";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
>>>>>>> cf368923ae8c61db91aa3739fa623ed6ec2d11f5

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
