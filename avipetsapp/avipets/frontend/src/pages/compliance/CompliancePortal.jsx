import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import compliance from "../../images/compliance.png";
import ComplianceWidget from "../../components/widgets/ComplianceWidget";

const CompliancePortal = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
    return (
      <div>
        <main>
          <Helmet>
            <title>AVI PETS - Compliance Portal</title>
            <meta name="description" content="AVI Pets Compliance Portal" />
          </Helmet>
        </main>
        <section className="container-fluid banner_compliance">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="text-white text-center mt-3 pt-2">
                Compliance and Processing Portal
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
                All access info to all USDA offices and permit links. Up to date
                pet travel and permit resources.
              </h2>
            </div>
            <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img
                className="img-fluid text-center mb-2"
                src={compliance}
                alt="airline"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="row d-flex justify_content_around">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="USDA Offices"
                destination="/usdaoffices"
                style_widget="comp_usda_widget"
                icon={<i className="fas fa-university"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Permits"
                destination="/countrypermits"
                style_widget="comp_country_widget"
                icon={<i className="fas fa-globe-asia"></i>}
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
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(CompliancePortal);
