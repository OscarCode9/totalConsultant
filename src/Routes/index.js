import React from "react";
import {  Route,  Switch } from "react-router-dom";
import Home from '../Components/Home';
import Page404 from '../Components/Page404'
export default () => (

  <Switch>
    <Route exact path='/' component={Home} />
    <Route component={Page404} />
  </Switch>
)