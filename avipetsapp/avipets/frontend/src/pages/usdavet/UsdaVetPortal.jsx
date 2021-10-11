import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import ComplianceWidget from "../../components/widgets/ComplianceWidget";
import usdavet from "../../images/usdavet3.png";

const UsdaVetPortal = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div>
      <main>
        <Helmet>
          <title>AVI PETS - USDA Vet Portal</title>
          <meta name="description" content="AVI Pets USDA Vet Portal" />
        </Helmet>
      </main>
      <section className="container-fluid banner_usda">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="text-white text-center mt-3 pt-2">
              USDA Vet Portal
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
              All access info to all thing vet and usda related for you pet
              travel needs.
            </h2>
          </div>
          <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img
              className="img-fluid text-center mb-1"
              src={usdavet}
              alt="usdavetimg"
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
              style_widget="usda_usda_widget"
              icon={<i className="fas fa-university"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Permits"
              destination="/countrypermits"
              style_widget="usda_country_widget"
              icon={<i className="fas fa-globe-asia"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Resources"
              destination="/complianceresources"
              style_widget="usda_res_widget"
              icon={<i className="fab fa-sourcetree"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Vet Info"
              destination="/usdavetlocations"
              style_widget="usda_vet_widget"
              icon={<i className="fas fa-user-md"></i>}
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
export default connect(mapStateToProps)(UsdaVetPortal);
