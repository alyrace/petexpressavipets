//import React, { useState, useEffect } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/navigation/navbar.component";
import "./home.scss";

const Home = ({isAuthenticated}) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  /*useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }*/
  return (
    <div className="Home">
      <main>
        <Helmet>
          <title>AVI PETS - HOME</title>
          <meta name="description" content="AVI Pets Hompage" />
        </Helmet>
      </main>
      <Navbar />
      <section className="container">
        <div className="row text-center text-white gx-3 gy-3">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/airlineportal">
              <div className="container box box_1">
                <div className="row pt-5">
                  <i class="fas fa-plane portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">Airlines</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/driversportal">
              <div className="container box box_2">
                <div className="row pt-5">
                  <i class="fas fa-truck-moving portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">Drivers</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/complianceportal">
              <div className="container box box_3">
                <div className="row pt-5">
                  <i class="fas fa-passport portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">Compliance</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/operationsportal">
              <div className="container box box_4">
                <div className="row pt-5">
                  <i class="fas fa-store-alt portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">Operations</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/petportal">
              <div className=" container box box_5">
                <div className="row pt-5">
                  <i class="fas fa-paw portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">Pet Portal</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/salesportal">
              <div className="container box box_6">
                <div className="row pt-5">
                  <i className="fas fa-mobile-alt portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">Sales</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/tsaportal">
              <div className="container box box_8">
                <div className="row pt-5">
                  <i className="fas fa-user-shield portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">TSA</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/usdavetportal">
              <div className="container box box_7">
                <div className="row pt-5">
                  <i className="fas fa-landmark portal_icon"></i>
                </div>
                <div className="row mt-4">
                  <span className="portal_title">USDA & Vet</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="container bg-primary mt-5">
        <h2>hello</h2>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Home);
