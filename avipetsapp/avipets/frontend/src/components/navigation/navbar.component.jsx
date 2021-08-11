import React, {Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../actions/auth";
import Logo from "../../images/logo3.png";
import Minibar from "./minibar.component";



const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const authLinks = () => (
    <li className="nav-item">
      <a className="dropdown-item nav-link" href="#!" onClick={logout_user}>
          <span className="text-secondary">Logout</span>
      </a>
    </li>
  );
 
  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  return (
    <div>
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container">
            <Link className="navbar-brand mx-5" to="/">
              <img src={Logo} alt="avi pets" />
            </Link>
            <button
              className="navbar-toggler text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavBar"
              aria-controls="topNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="topNavBar">
              <ul className="d-flex justify-content-center navbar-nav me-auto mt-2 mb-4 mb-lg-0">
                <li className="nav-item">
                  <Minibar />
                </li>
              </ul>
              <form className="d-flex mb-1">
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
                    {isAuthenticated ? authLinks() : null}
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={logout_user}
                      >
                        <span className="text-secondary">Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {redirect ? <Redirect to="/login" /> : <Fragment></Fragment>}
      </Fragment>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(Navbar);

