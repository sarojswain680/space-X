import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from '../src/Component/Dashboard/index';
import Login from '../src/Component/Login/index';
import NavBar from '../src/Component/NavBar/index';
import Capsules from '../src/Component/Capsules/index';
import Cores from '../src/Component/Cores/index';
import Dragons from '../src/Component/Dragons/index';
import History from '../src/Component/History/index';
import Landing from '../src/Component/Landing/index';
import Launches from '../src/Component/Launches/index';
import LaunchPad from '../src/Component/LaunchPad/index';
import Missions from '../src/Component/Missions/index';
import Payloads from '../src/Component/Payloads/index';
import Roadster from '../src/Component/Roadster/index';
import Rockets from '../src/Component/Rockets/index';
import Ships from '../src/Component/Ships/index';

class App extends Component {

  render() {
    return (
      <BrowserRouter className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/cores" component={Cores} />
          <Route exact path="/dragon" component={Dragons} />
          <Route exact path="/capsules" component={Capsules} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/history" component={History} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/launches" component={Launches} />
          <Route exact path="/launchpad" component={LaunchPad} />
          <Route exact path="/missions" component={Missions} />
          <Route exact path="/payloads" component={Payloads} />
          <Route exact path="/roadster" component={Roadster} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/ships" component={Ships} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default withRouter(App);
