import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
//import axiosInstance from '../../axios/login';


import { login } from "../../actions/auth";

import dog from "../../images/dog3.png";
import "./welcome.scss";
import LoginForm from "../../components/forms/LoginformComponent";


const Login = () => {
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
                <LoginForm />
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
