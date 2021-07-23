import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import axiosInstance from '../../axios/login';


import { login } from "../../actions/auth";

import "../../sass/login.scss";
import dog from "../../images/dog3.png";

const Login = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState('')
  const [pasword, setPassword] = useState("");


  


  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="welcome_page_background auth">
      <Helmet>
        <title>AVI PETS - LOGIN</title>
        <meta name="description" content="login page" />
      </Helmet>
      <div className="container-fluid g-1">
        <div className="row main_content text-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center pet_card">
            <span id="pet">
              <img className="pet" src={dog} alt="doggy" />
            </span>
            <h1 className="company_title">AVI PETS</h1>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container-fluid">
              <div className="row">
                <form className="login_form" onSubmit={(e) => onSubmit(e)}>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center welcome_back">
                      <h3>Welcome back</h3>
                    </div>
                  </div>
                  <div className="form-group">
                    <i class="far fa-user-circle"></i>
                    <label htmlFor="email" className="form_label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <i class="fas fa-lock"></i>
                    <label htmlFor="password" className="form_label m-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength="10"
                    />
                  </div>
                  <div className="form-group form-check">
                    <label
                      htmlFor="remember_me"
                      className="form-check-label m-1"
                    >
                      <input
                        type="checkbox"
                        name="remember_me pd-1"
                        id="remember_me"
                        className="form-check-input login_label"
                      />
                      Remember Me
                    </label>
                  </div>
                  <div className="row">
                    <button
                      type="submit"
                      class="btn btn-outline-danger login_btn"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
