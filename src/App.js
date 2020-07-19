import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from '../src/Component/Dashboard/index';
import Login from '../src/Component/Login/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);
