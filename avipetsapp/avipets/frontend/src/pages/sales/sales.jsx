import React, { Component } from "react";
import Navbar from "../../components/navigation/navbar.component";
import "../airlines/airlines.scss";
import sales from "../../images/sales.png";

class SalesPortal extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <section className="container-fluid banner_sales">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="text-white text-center mt-3 pt-2">
                  Sales Portal
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
                  Your one stop shop for boarding and pet care at Pet Express
                  International Transport.
                </h2>
              </div>
              <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  className="img-fluid text-center mb-5"
                  src={sales}
                  alt="airline"
                />
              </div>
            </div>
          </section>
          <section className="container bg-transparent">
            <div className="row">
              <div className="center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h3 className="text-dark text-center">Enter</h3>
              </div>
            </div>
            <div className="row align-items-center pt-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12 col-xs-12 mx-auto my-auto">
                <form className="form-group" action="">
                  <div className="input-group form-container">
                    <span className="input-group-text">
                      <i
                        class="fas fa-search-location search_sales fa-2x"
                        id="Search"
                      ></i>
                    </span>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append position-relative">
                      <button
                        className="btn btn_sales btn-lg position-absolute top-0 end-0"
                        type="submit"
                        id="Search"
                      >
                        <i
                          class="fa fa-arrow-right fa-sm"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SalesPortal;
