import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import '../dashboard/dashboard.scss'
import "../dashboard/theme.scss";
//import logo from '../../images/logo3.png'
import Calendar from "../../components/calendar/calendar";
//import Sidebar from "../../components/navigation/minibar.component";
import Navbar from "../../components/navigation/navbar.component";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <i
              className="fa fa-bandcamp fa-lg"
              data-bs-target="#sidebar"
              aria-hidden="true"
            ></i>
          </button>
        </nav>
        <div
          className="offcanvas offcanvas-start sidebar-nav"
          tabindex="-1"
          id="sidebar"
        >
          <div className="offcanvas-body p-0">
            <nav className="navbar-dark">
              <ul className="navbar-nav">
                <li>
                  <div className="text-light small fw-bold text-uppercase px-3">
                    Welcome User
                  </div>
                </li>
                <li>
                  <a href="#" className="nav-link px-3 active">
                    <span className="me-2">
                      <i className="bi bi-speedometer2"></i>
                    </span>
                    <span>Dashboard</span>
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
        <main class="mt-5 pt-3 mt-5">
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
                <div class="card card_1 text-white h-100">
                  <div class="card-body py-5">Employees</div>
                </div>
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
                <div class="card card_4 text-white h-100">
                  <div class="card-body py-5">Crates</div>
                </div>
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
  }
}

export default Dashboard;
