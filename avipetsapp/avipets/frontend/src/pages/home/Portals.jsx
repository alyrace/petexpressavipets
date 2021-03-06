//import React, { useState, useEffect } from "react";
import React from "react";
import { Redirect } from "react-router-dom";



const Portals = () => {
  /*useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }*/
  return (
    <div className="Home">
      <section className="container">
        <div className="row text-center text-white gx-3 gy-3">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <a className="Link" href="/airlineportal">
              <div className="container box box_1">
                <div className="row pt-5">
                  <i className="fas fa-plane portal_icon"></i>
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
                  <i className="fas fa-truck-moving portal_icon"></i>
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
                  <i className="fas fa-passport portal_icon"></i>
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
                  <i className="fas fa-store-alt portal_icon"></i>
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
                  <i className="fas fa-paw portal_icon"></i>
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
    </div>
  );
};

export default Portals;
