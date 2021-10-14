import React from "react";
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Activate from "./pages/activate/activate";
import Airlines from "./pages/airlines/AirlinePortal";
import AirlineDetails from "./pages/airlines/AirlineDetails";
import ClientAdd from "./pages/clients/ClientAdd";
import ClientDetail from "./pages/clients/ClientDetail";
import ClientEdit from "./pages/clients/ClientEdit";
import ClientHome from "./pages/clients/clienthome";
import CompliancePortal from "./pages/compliance/CompliancePortal";
import CompResourcesDetail from "./pages/compliance/CompResourcesDetail";
import ComplianceResources from "./pages/compliance/ComplianceResources";
import CountryHome from "./pages/compliance/CountryHome";
import Dashboard from "./pages/home/Dashboard";
import DriversPortal from "./pages/drivers/DriverPortal";
import Employees from "./pages/employees/Employees";
import EmployeeDetail from "./pages/employees/EmployeeDetail";
import Inventory from "./pages/inventory/InventoryHome";
import InventoryAddItems from "./pages/inventory/AddItems";
import InventoryDetail from "./pages/inventory/ItemDetail";
import InventoryEditItems from "./pages/inventory/EditItems";
import Invoice from "./pages/invoice/invoicehome";
import EditInvoice from "./pages/invoice/EditInvoice";
import InvoiceAddItems from "./pages/invoice/InvoiceAddItems";
import InvoiceDetail from "./pages/invoice/InvoiceDetail";
import Locations from "./pages/usdavet/Locations";
import Login from "./pages/login/Login";
import OperationsPortal from "./pages/operations/OperationSPortal";
import OpsVetChecklist from "./pages/usdavet/OpsVetChecklist";
import OpsUsdaChecklist from "./pages/usdavet/OpsUsdaChecklist";
import DriverVetChecklist from "./pages/usdavet/DriverVetChecklist";
import DriverUsdaChecklist from "./pages/usdavet/DriverUsdaChecklist";
import SalesPortal from "./pages/sales/SalesPortal";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ResetPasswordConfirm from "./pages/resetpassword/ResetPasswordConfirm";
import PetPortal from "./pages/petportal/PetPortal";
import PrivateRoute from '../src/components/protectedroutes';
import TsaPortal from "./pages/tsa/TsaPortal";
import UsdaVetPortal from "./pages/usdavet/UsdaVetPortal";
import UsdaHome from "./pages/compliance/UsdaHome";



import "./App.scss";
import Layout from "./hocs/layout";

//import InvoicePage from "./pages/invoice/invoicepage";

import "./sass/main.scss";
import LeadDashBoard from "./pages/sales/LeadDashBoard";
import AssignAgent from "./pages/sales/AssignAgent";
import CreateLead from "./pages/sales/CreateLead";
import EditLead from "./pages/sales/EditLead";
import LeadDetail from "./pages/sales/LeadDetail";

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
          <Route path="/operationsportal" component={OperationsPortal} />
          <Route path="/petportal" component={PetPortal} />
          <Route exact path="/salesportal" component={SalesPortal} />
          <Route path="/salesportal/leaddashboard" component={LeadDashBoard} />
          <Route path="/salesportal/assignent" component={AssignAgent} />
          <Route path="/salesportal/createlead" component={CreateLead} />
          <Route path="/salesportal/salesleaddetail/:id" component={LeadDetail} />
          <Route path="/salesportal/leadupdate/:id" component={EditLead} />
          <Route
            path="/resetpasswordconfirm"
            component={ResetPasswordConfirm}
          />
          <Route path="/tsaportal" component={TsaPortal} />
          <Route path="/usdavetportal" component={UsdaVetPortal} />
          <Route path="/usdavetlocations" component={Locations} />
          <Route path="/opsvetchecklist" component={OpsVetChecklist} />
          <Route path="/opsusdachecklist" component={OpsUsdaChecklist} />
          <Route path="/drivervetchecklist" component={DriverVetChecklist} />
          <Route path="/driverusdachecklist" component={DriverUsdaChecklist} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

export default App;
