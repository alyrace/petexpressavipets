import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from '../../images/logo1.png';
import Sidebar from './minibar.component';


const Navbar = () => {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="avi pets" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mt-4 mb-4 mb-lg-0">
                <li className="nav-item">
                  <Sidebar />
                </li>
              </ul>
              <form className="d-flex mb-2">
                <input
                  className="form-control me-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-danger me-4" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <ul className="navbar-nav right">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Avatar
                      shape="square"
                      size="large"
                      aria-hidden="True"
                      icon={<UserOutlined />}
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="text-secondary">Light/Dark Mode</span>
                        <div className="form-check form-switch mt-2 text-secondary">
                          <label
                            className="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            <input
                              className="form-check-input me-3"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                            <i class="fa fa-sun-o" aria-hidden="true"></i>/
                            <i class="fa fa-moon-o" aria-hidden="true"></i>
                          </label>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="text-secondary">Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };

export default Navbar;

