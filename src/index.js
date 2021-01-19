import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/resourcesdolankuy.scss?v1.4.0";
import "assets/css/demo.css";
import AdminLayout from "./layouts/Admin.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/layouts" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/layouts/listwisata" />
    </Switch>
  </Router>,
  document.getElementById("root")
);