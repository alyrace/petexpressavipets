import React from "react"
import { Helmet } from "react-helmet";
import cat from "../../images/cat.png";
import RegisterForm from "../../components/forms/registerform.component";
import "../register/registerpage.scss";


const Register = ({ isAuthenticated, match }) => {
  return (
    <div className="register_page_background auth">
      <Helmet>
        <title>AVI PETS - REGISTER</title>
        <meta name="description" content="register page" />
      </Helmet>
      <div className="container">
        <div className="row main_content2 text-center">
          <div className="col-xxl-12">
            <h4>Register Employee</h4>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center pet_card2">
            <span id="pet">
              <img className="pet2" src={cat} alt="kitty" />
            </span>
            <h1 className="company_title">AVI PETS</h1>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="container-fluid">
              <div className="row">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register