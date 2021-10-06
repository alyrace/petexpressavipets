import React from "react";
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Activate from "./pages/activate/activate";
import Airlines from "./pages/airlines/airlines";
import AirlineDetails from "./pages/airlines/airlinedetails";
import CompliancePortal from "./pages/compliance/compliance";
import Dashboard from "./pages/dashboard/dashboard";
import DriversPortal from "./pages/drivers/drivers";
import Home from "./pages/home/home";
import Inventory from "./pages/inventory/inventoryhome";
import InventoryAddItems from "./pages/inventory/additems";
import InventoryDetail from "./pages/inventory/itemdetail";
import InventoryEditItems from "./pages/inventory/edititems";
import Login from "./pages/login/login";
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
import Employees from "./pages/employees/employees";
import EmployeeDetail from "./pages/employees/employeedetail";
import Invoice from "./pages/invoice/invoicehome";
import EditInvoice from "./pages/invoice/editinvoice";
import InvoiceAddItems from "./pages/invoice/invoiceadditems";
import InvoiceDetail from "./pages/invoice/invoicedetail";
import ClientHome from "./pages/clients/clienthome";
import ClientDetail from "./pages/clients/clientdetail";
import ClientAdd from "./pages/clients/clientadd";
import ClientEdit from "./pages/clients/clientedit";
import ClientDropdown from "./pages/invoice/clientdropdown";
import NoteryHome from "./pages/notery/noteryhome";
//import InvoicePage from "./pages/invoice/invoicepage";



//import { withTheme } from '../../frontend/src/themes/Theme';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route path="/airlineportal" component={Airlines} />
          <Route exact path="/airline/:id" component={AirlineDetails} />
          <Route path="/clients" component={ClientHome} />
          <Route path="/clientadd" component={ClientAdd} />
          <Route path="/clientdetail/:id" component={ClientDetail} />
          <Route path="/clienttest" component={ClientDropdown} />
          <Route path="/clientupdate/:id" component={ClientEdit} />
          <Route path="/complianceportal" component={CompliancePortal} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/driversportal" component={DriversPortal} />
          <Route path="/employees" component={Employees} />
          <Route path="/employeeprofile/:id" component={EmployeeDetail} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventoryadd" component={InventoryAddItems} />
          <Route path="/inventorydetail/:id" component={InventoryDetail} />
          <Route path="/inventoryupdate/:id" component={InventoryEditItems} />
          <Route path="/invoices" component={Invoice} />
          <Route path="/invoiceadd" component={InvoiceAddItems} />
          <Route path="/invoicedetail/:id" component={InvoiceDetail} />
          <Route path="/invoiceupdate/:id" component={EditInvoice} />
          <Router path="/notery" component={NoteryHome} />
          <Route path="/operationsportal" component={OperationsPortal} />
          <Route path="/petportal" component={PetPortal} />
          <Route path="/salesportal" component={SalesPortal} />
          <Route
            path="/resetpasswordconfirm"
            component={ResetPasswordConfirm}
          />
          <Route path="/tsaportal" component={TsaPortal} />
          <Route path="/usdavetportal" component={UsdaVetPortal} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

export default App;
