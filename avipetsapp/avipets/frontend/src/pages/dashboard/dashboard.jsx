import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";


import Calendar from "../../components/calendar/calendar";

import "../dashboard/dashboard.scss";
import "../dashboard/theme.scss";



const Dashboard = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  
 
  return (
    <div>
      <main>
        <Helmet>
          <title>AVI PETS - Dashboard</title>
          <meta name="description" content="AVI Pets Dashboard" />
        </Helmet>
      </main>
      <button
        className="navbar-toggler mt-1 ms-1"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="offcanvasdashnav"
      >
        <i
          className="fa fa-bandcamp fa-lg"
          data-bs-target="#sidebar"
          aria-hidden="true"
        ></i>
      </button>
      <h2 className="text-center text-secondary">AVI Pets Dasboard</h2>
      <div
        className="offcanvas offcanvas-start sidebar-nav"
        tabindex="-1"
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-light text-center small fw-bold text-uppercase px-3">
                  Welcome User
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                </a>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-light small fw-bold text-uppercase px-3 mb-3">
                  Interface
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts"
                >
                  <span className="me-2">
                    <i class="fa fa-adjust" aria-hidden="true"></i>
                  </span>
                  <span>Theme</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i
                        className="fa fa-chevron-circle-down"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts">
                  <ul className="list-group nav_list navbar-nav ps-3">
                    <li className="list-group-item nav_list">
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="fas fa-speedometer2"></i>
                        </span>
                        <span>
                          <div
                            data-mode="light"
                            id="light-mode"
                            class="theme-dot"
                          ></div>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-group-item nav_list">
                <a href="/" className="nav-link px-3">
                  <span className="me-2">
                    <i className="fas fa-book-fill"></i>
                  </span>
                  <span>Home</span>
                </a>
              </li>
              <li className="list-group-item nav_list my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li className="list-group-item nav_list">Stuff</li>
              <li className="list-group-item nav_list">
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="fas fa-table"></i>
                  </span>
                  <span>Tables</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main class="mt-3">
        <div className="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-12">
              <Calendar />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-3">
              <Link to="/employees">
                <div class="card card_1 text-white h-100">
                  <div class="card-body py-5">
                    <i class="fas fa-users fa-3x mb-2"></i>
                    <h3>Employees</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card_2 text-white h-100">
                <div class="card-body py-5">Pets</div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card_3 text-white h-100">
                <div class="card-body py-5">Open Rooms</div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <Link to="/inventory">
                <div class="card card_4 text-white h-100 text-center">
                  <div class="card-body py-5">
                    <i class="fas fa-box-open fa-3x mb-2"></i>{" "}
                    <h3>Inventory</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="card h-100">
                <div class="card-header">
                  <span class="me-2">
                    <i class="fas fa-bar-chart-fill"></i>
                  </span>
                  Area Chart Example
                </div>
                <div class="card-body">
                  <canvas class="chart" width="400" height="200"></canvas>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card h-100">
                <div class="card-header">
                  <span class="me-2">
                    <i class="fas fa-bar-chart-fill"></i>
                  </span>
                  Area Chart Example
                </div>
                <div class="card-body">
                  <canvas class="chart" width="400" height="200"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3">
              <div class="card">
                <div class="card-header">
                  <span>
                    <i class="bi bi-table me-2"></i>
                  </span>{" "}
                  Data Table
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Dashboard);
