import  React, { Component }  from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from '../Components/Home';
import Nosotros from '../Components/Nosotros';
import Servicios from '../Components/Servicios';
import Clientes from '../Components/Clientes';
import Page404 from '../Components/Page404';
import Contacto from '../Components/Contecto';

 class index extends Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.onRouteChanged(this.props.location);
    }
  }


  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/servicios' component={Servicios} />
        <Route exact path='/clientes' component={Clientes} />
        <Route exact path='/contacto' component={Contacto} />
        <Route component={Page404} />
      </Switch>
    )
  }
}


export default withRouter(index)

