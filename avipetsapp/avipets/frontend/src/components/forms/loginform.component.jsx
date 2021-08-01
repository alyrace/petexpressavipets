import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../sass/login.scss";


const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return Redirect("/");
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center welcome_back">
          <h3>Welcome back</h3>
        </div>
      </div>
      <form className="login_form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <i class="far fa-user-circle"></i>
          <label htmlFor="email" className="form_label">
            Username
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => onChange(e)}
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
            onChange={(e) => onChange(e)}
            minLength="8"
          />
        </div>
        <div className="form-group form-check">
          <label htmlFor="remember_me" className="form-check-label m-1">
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
          <button class="btn btn-outline-danger login_btn">Login</button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
