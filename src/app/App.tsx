import React from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "../page/homepage";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;