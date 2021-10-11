import React from "react";
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Activate from "./pages/activate/activate";
import Airlines from "./pages/airlines/AirlinePortal";
import AirlineDetails from "./pages/airlines/AirlineDetails";
import CompliancePortal from "./pages/compliance/CompliancePortal";
import Dashboard from "./pages/home/Dashboard";
import DriversPortal from "./pages/drivers/DriverPortal";
import Inventory from "./pages/inventory/InventoryHome";
import InventoryAddItems from "./pages/inventory/AddItems";
import InventoryDetail from "./pages/inventory/ItemDetail";
import InventoryEditItems from "./pages/inventory/EditItems";
import Login from "./pages/login/Login";
import OperationsPortal from "./pages/operations/OperationSPortal";
import SalesPortal from "./pages/sales/SalesPortal";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ResetPasswordConfirm from "./pages/resetpassword/ResetPasswordConfirm";
import PetPortal from "./pages/petportal/PetPortal";
import PrivateRoute from '../src/components/protectedroutes';
import TsaPortal from "./pages/tsa/TsaPortal";
import UsdaVetPortal from "./pages/usdavet/UsdaVetPortal";

import "./App.scss";
import Layout from "./hocs/layout";
import Employees from "./pages/employees/Employees";
import EmployeeDetail from "./pages/employees/EmployeeDetail";
import Invoice from "./pages/invoice/invoicehome";
import EditInvoice from "./pages/invoice/EditInvoice";
import InvoiceAddItems from "./pages/invoice/InvoiceAddItems";
import InvoiceDetail from "./pages/invoice/InvoiceDetail";
import ClientHome from "./pages/clients/clienthome";
import ClientDetail from "./pages/clients/ClientDetail";
import ClientAdd from "./pages/clients/ClientAdd";
import ClientEdit from "./pages/clients/ClientEdit";
import ClientDropdown from "./pages/invoice/ClientDropdown";
import NoteryHome from "./pages/notery/noteryhome";
//import InvoicePage from "./pages/invoice/invoicepage";

import "./sass/main.scss";
import UsdaHome from "./pages/compliance/UsdaHome";
import CountryHome from "./pages/compliance/CountryHome";
import ComplianceResources from "./pages/compliance/ComplianceResources";
import CompResourcesDetail from "./pages/compliance/CompResourcesDetail";
import Locations from "./pages/usdavet/Locations";
import OpsVetCheckList from "./pages/usdavet/OpsVetCheckList";

//import { withTheme } from '../../frontend/src/themes/Theme';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route path="/airlineportal" component={Airlines} />
          <Route exact path="/airline/:id" component={AirlineDetails} />
          <Route path="/clients" component={ClientHome} />
          <Route path="/clientadd" component={ClientAdd} />
          <Route path="/clientdetail/:id" component={ClientDetail} />
          <Route path="/clienttest" component={ClientDropdown} />
          <Route path="/clientupdate/:id" component={ClientEdit} />
          <Route path="/complianceportal" component={CompliancePortal} />
          <Route path="/complianceresources" component={ComplianceResources} />
          <Route
            path="/complianceresourcedetail/:id"
            component={CompResourcesDetail}
          />
          <Route path="/usdaoffices" component={UsdaHome} />
          <Route path="/countrypermits" component={CountryHome} />
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
          <Route path="/usdavetlocations" component={Locations} />
          <Route path="/opsvetchecklist" component={OpsVetCheckList} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

export default App;
