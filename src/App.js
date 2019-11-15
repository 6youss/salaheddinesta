import React from "react";
// ! import "./App.css";
import "./Components/style.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Portfolio_ReactApp from "./Components/Portfolio_ReactApp.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Events, scrollSpy } from 'react-scroll'

export class App extends React.Component{

  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }


  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

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
