import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Airlines from "./pages/airlines/airlines";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import PetPortal from "./pages/petportal/petportal";
import UsdaVetPortal from "./pages/usdavet/usdavet";
import OperationsPortal from "./pages/operations/operations";
import CompliancePortal from "./pages/compliance/compliance";
import TsaPortal from "./pages/tsa/tsa";
import SalesPortal from "./pages/sales/sales";
import DriversPortal from "./pages/drivers/drivers";
import PrivateRoute from '../src/components/protectedroutes';

import "./App.scss";
import Register from "./pages/register/register";

//import { withTheme } from '../../frontend/src/themes/Theme';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/airlineportal" component={Airlines} />
        <Route path="/complianceportal" component={CompliancePortal} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/driversportal" component={DriversPortal} />
        <Route exact path="/login" component={Login} />
        <Route path="/operationsportal" component={OperationsPortal} />
        <Route path="/petportal" component={PetPortal} />
        <Route path="/salesportal" component={SalesPortal} />
        <Route path="/register" component={Register} />
        <Route path="/tsaportal" component={TsaPortal} />
        <Route path="/usdavetportal" component={UsdaVetPortal} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
