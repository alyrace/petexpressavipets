import React from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./register.scss";

const RegisterForm = () => {
  return (
    <div>
      <form className="register_form">
        <div className="form-group">
          <i class="fas fa-paw"></i>
          <label htmlFor="first" className="form-label">
            First Name
            <input
              type="text"
              name="first"
              id="first"
              className="form-control"
              placeholder="First Name"
              //value={email}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <i class="fas fa-paw"></i>
          <label htmlFor="last" className="form-label">
            Last Name
            <input
              type="last"
              name="last"
              id="last"
              className="form-control"
              placeholder="Last Name"
              //value={email}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <i class="fas fa-user"></i>
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              //value={email}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <i class="fas fa-lock"></i>
          <label htmlFor="password" className="form-label">
            Password
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              //value={password}
              minLength="8"
            />
          </label>
        </div>
        <div className="form-group mb-1">
          <i class="fas fa-user-lock"></i>
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              className="form-control"
              placeholder="Confirm Password"
              //value={password}
              minLength="8"
            />
          </label>
        </div>
        <div className="row">
          <div className="col-12">
            <button class="btn btn-lg btn-outline-primary register_btn">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
