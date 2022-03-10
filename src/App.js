import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adduser from './components/Adduser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Updateuser from './components/Updateuser';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addUser" component={Adduser} />
          <Route exact path="/updateuser/:id" component={Updateuser} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
