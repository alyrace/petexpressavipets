import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Airlines from "./pages/airlines/airlines";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";

import "./App.scss";
import PetPortal from "./pages/petportal/petportal";
import UsdaVetPortal from "./pages/usdavet/usdavet";
import OperationsPortal from "./pages/operations/operations";
import CompliancePortal from "./pages/compliance/compliance";
import TsaPortal from "./pages/tsa/tsa";
import SalesPortal from "./pages/sales/sales";
import DriversPortal from "./pages/drivers/drivers";



//import { withTheme } from '../../frontend/src/themes/Theme';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/airlineportal" component={Airlines} />
        <Route path="/complianceportal" component={CompliancePortal} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/driversportal" component={DriversPortal} />
        <Route path="/operationsportal" component={OperationsPortal} />
        <Route path="/petportal" component={PetPortal} />
        <Route path="/salesportal" component={SalesPortal} />
        <Route path="/tsaportal" component={TsaPortal} />
        <Route path="/usdavetportal" component={UsdaVetPortal} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
