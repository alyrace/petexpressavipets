import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";


import ComplianceWidget from "../../components/widgets/ComplianceWidget";

import sales from "../../images/sales.png";

const SalesPortal = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div>
      <section className="container-fluid banner_sales">
        <main>
          <Helmet>
            <title>AVI PETS - Sales Portal</title>
            <meta name="description" content="AVI Pets Sales Portal" />
          </Helmet>
        </main>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="text-white text-center mt-3 pt-2">Sales Portal</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
              Lead Sales CRM, Task Management and Travel Resources.
            </h2>
          </div>
          <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img className="img-fluid text-center" src={sales} alt="airline" />
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify_content_around">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Leads"
              destination="/salesportal/leaddashboard"
              style_widget="comp_usda_widget"
              icon={<i className="fas fa-funnel-dollar"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Barker"
              destination="www.barker.xyz"
              style_widget="comp_country_widget"
              icon={<i className="fab fa-trello"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Resources"
              destination="/complianceresources"
              style_widget="comp_res_widget"
              icon={<i className="fab fa-sourcetree"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Airline List"
              destination="/airlineportal"
              style_widget="comp_airline_widget"
              icon={<i className="fas fa-plane"></i>}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(SalesPortal);
