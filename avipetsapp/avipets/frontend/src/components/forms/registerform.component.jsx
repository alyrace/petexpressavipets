import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import "./register.scss";

const RegisterForm = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
   const { first_name, last_name, email, password, re_password } = formData;

   const onChange = (e) =>
     setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
     e.preventDefault();

     if (password === re_password) {
       signup(first_name, last_name, email, password, re_password);
       setAccountCreated(true);
     }
   };
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    if (accountCreated) {
      return <Redirect to="/login" />;
    }

  return (
    <div>
      <form className="register_form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <i class="fas fa-paw"></i>
          <label htmlFor="first_name" className="form-label">
            First Name
            <input
              type="text"
              name="first_name"
              id="first"
              className="form-control"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => onChange(e)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <i class="fas fa-paw"></i>
          <label htmlFor="last_name" className="form-label">
            Last Name
            <input
              type="text"
              name="last_name"
              id="last"
              className="form-control"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => onChange(e)}
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
              value={email}
              onChange={(e) => onChange(e)}
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
              value={password}
              onChange={(e) => onChange(e)}
              minLength="8"
            />
          </label>
        </div>
        <div className="form-group mb-1">
          <i class="fas fa-user-lock"></i>
          <label htmlFor="re_password" className="form-label">
            Confirm Password
            <input
              type="password"
              name="re_password"
              id="re_password"
              className="form-control"
              placeholder="Confirm Password"
              value={re_password}
              onChange={(e) => onChange(e)}
              minLength="8"
            />
          </label>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" class="btn btn-lg btn-outline-primary register_btn">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { signup })(RegisterForm);
