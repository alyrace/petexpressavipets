import React from 'react'
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ComplianceWidget from "../../components/widgets/ComplianceWidget";
import { Redirect, Link } from "react-router-dom";
import Usdalogo from "../../images/USDA-Logo.jpg";

import Qualitylogo from "../../images/qualityanimallogo.png";
const Locations = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div>
      <main className="container">
        <Helmet>
          <title>AVI PETS - USDA/Vet Locations and Info</title>
          <meta
            name="description"
            content="AVI Pets USDA/Vet Locations and Info"
          />
        </Helmet>
      </main>
      <section className="mt-2">
        <div className="row d-flex justify_content_around">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="USDA-Ops"
              destination="/opsusdachecklist"
              style_widget="usda_usda_widget"
              icon={<i className="fas fa-university"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="USDA-Driver"
              destination="/driverusdachecklist"
              style_widget="usda_country_widget"
              icon={<i className="fas fa-university"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Vet-Ops"
              destination="/opsvetchecklist"
              style_widget="usda_res_widget"
              icon={<i className="fas fa-user-md"></i>}
            />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <ComplianceWidget
              title="Vet-Driver"
              destination="/drivervetchecklist"
              style_widget="usda_vet_widget"
              icon={<i className="fas fa-user-md"></i>}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container bg-light">
              <h2 className="text-center text-secondary pt-5">
                Los Angeles USDA
              </h2>
              <div className="container d-flex justify-content-center mt-3">
                <img src={Usdalogo} alt=" usda logo" />
              </div>
              <br />
              <p className="text-center text-secondary">
                Endorsement services offered via appointment only.
                <br />
                Certificates are not accepted via walk-in or mail.
              </p>
              <br />
              <p className="text-center text-secondary">
                Los Angeles Animal Import Center (LA AIC)
              </p>
              <br />
              <p className="text-center text-secondary">
                222 Kansas Street
                <br />
                El Segundo, CA 90245
              </p>
              <br />
              <p className="text-center text-secondary">
                <span className="fw-bolder">Business Hours:</span>
                <br />
                <span className="fw-bold">Sunday</span> Closed
                <br />
                <span className="fw-bold">Monday</span> 7:30AM–4PM
                <br />
                <span className="fw-bold">Tuesday</span> 7:30AM–4PM
                <br />
                <span className="fw-bold">Wednesday</span> 7:30AM–4PM
                <br />
                <span className="fw-bold">Thursday</span>7:30AM–4PM
                <br />
                <span className="fw-bold">Friday</span> 7:30AM–4PM
                <br />
                <span className="fw-bold">Saturday</span> Closed
              </p>
              <br />
              <p className="text-center text-secondary">Phone: 310-955-3311</p>
              <p className="text-center text-secondary">
                Email: VSPSLAX@usda.gov
              </p>
              <p className="text-center text-secondary pb-5">
                <a href="https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/california">
                  Website
                </a>
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container bg-light">
              <h2 className="text-center text-secondary pt-5">
                Main Los Angeles Vet
              </h2>
              <div className="container d-flex justify-content-center mt-3">
                <img className="vet_logo" src={Qualitylogo} alt=" usda logo" />
              </div>
              <br />
              <p className="text-center text-secondary">
                Endorsement of pemits/vet exams offered via appointment only.
              </p>
              <br />
              <p className="text-center text-secondary mt-1">
                Qaulity Animal Clinic
              </p>
              <br />
              <p className="text-center text-secondary">
                7625 Crenshaw Blvd,
                <br />
                Los Angeles, CA 90043
              </p>
              <br />
              <p className="text-center text-secondary">
                <span className="fw-bolder">Business Hours:</span>
                <br />
                <span className="fw-bold">Sunday</span> Closed
                <br />
                <span className="fw-bold">Monday</span> 7:30AM–6PM
                <br />
                <span className="fw-bold">Tuesday</span> 7:30AM–6PM
                <br />
                <span className="fw-bold">Wednesday</span> 7:30AM–6PM
                <br />
                <span className="fw-bold">Thursday</span> 7:30AM–6PM
                <br />
                <span className="fw-bold">Friday</span> 7:30AM–6PM
                <br />
                <span className="fw-bold">Saturday</span> 8AM–1PM
              </p>
              <br />
              <p className="text-center text-secondary">
                Phone: (323) 920-7445
              </p>
              <p className="text-center text-secondary">
                Email: qualityanimalclinic@gmail.com
              </p>
              <p className="text-center text-secondary pb-5">
                <a href="https://www.qualityanimalclinic.com/">Website</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Locations);
