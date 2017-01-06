import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { ListItem } from "./components/ListItem";
import { App } from "./components/App";
import { Login } from "./components/Login";
import { ViewItem } from "./components/ViewItem";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { User } from "./components/User";


  const routes = (<Router history={browserHistory}>
                      <Route path="/" component={Login}>
                          <IndexRoute component = {Login}></IndexRoute>
                      </Route>
                      <Route path="/view" component={ViewItem} />
                      <Route path="/app" component={App} />
                      <Route path="/sign-in" component={SignIn} />
                      <Route path="/sign-up" component={SignUp} />
                      <Route path="/user" component={User} />
                    </Router>);

render(routes, document.getElementById('app'));
