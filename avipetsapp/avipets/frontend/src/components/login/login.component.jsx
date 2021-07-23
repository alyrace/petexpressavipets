import React, { Component } from "react";
import "./login.scss";

import dog from "../../images/dog3.png";

import LoginForm from "../forms/loginform.component";

class LoginComponent extends Component {
  render() {
    return (
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
    );
  }
}

export default LoginComponent;
