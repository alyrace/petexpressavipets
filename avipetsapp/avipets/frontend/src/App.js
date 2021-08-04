import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Activate from "./pages/activate/activate";
import Airlines from "./pages/airlines/airlines";
import CompliancePortal from "./pages/compliance/compliance";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import DriversPortal from "./pages/drivers/drivers";
import OperationsPortal from "./pages/operations/operations";
import SalesPortal from "./pages/sales/sales";
import Register from "./pages/register/register";
import ResetPassword from "./pages/resetpassword/resetpassword";
import ResetPasswordConfirm from "./pages/resetpassword/resetpasswordconfirm";
import PetPortal from "./pages/petportal/petportal";
import PrivateRoute from '../src/components/protectedroutes';
import TsaPortal from "./pages/tsa/tsa";
import UsdaVetPortal from "./pages/usdavet/usdavet";

import "./App.scss";
import Layout from "./hocs/layout";
//import { withTheme } from '../../frontend/src/themes/Theme';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route path="/airlineportal" component={Airlines} />
          <Route path="/complianceportal" component={CompliancePortal} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/driversportal" component={DriversPortal} />
          <Route exact path="/login" component={Login} />
          <Route path="/operationsportal" component={OperationsPortal} />
          <Route path="/petportal" component={PetPortal} />
          <Route path="/salesportal" component={SalesPortal} />
          <Route path="/register" component={Register} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/resetpasswordconfirm" component={ResetPasswordConfirm} />
          <Route path="/tsaportal" component={TsaPortal} />
          <Route path="/usdavetportal" component={UsdaVetPortal} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
