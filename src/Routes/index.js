import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../Components/Home';
import Nosotros from '../Components/Nosotros';
import Servicios from '../Components/Servicios';
import Clientes from '../Components/Clientes'
import Page404 from '../Components/Page404'
export default () => (

  <Switch>
    <Route exact path='/inicio' component={Home} />
    <Route exact path='/nosotros' component={Nosotros} />
    <Route exact path='/servicios' component={Servicios} />
    <Route exact path='/clientes' component={Clientes} />
    <Route component={Page404} />
  </Switch>
)