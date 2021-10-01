import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
//import { useHistory } from "react-router";
//import jsPDF from "jspdf";
//import "jspdf-autotable";

import "./employees.scss";
import pxlogo from "../../images/petexpresslogo.png";
import qrcode from "../../images/qrcode.png";
const EmployeeDetail = ({ isAuthenticated, match }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    
    const [profile, setProfileDetail] = useState("");

    useEffect(() => {
      window.scrollTo(0, 0);
      const id = match.params.id;

      axios
        .get(`${process.env.REACT_APP_API_URL}/api/employees/${id}/`)
        .then((res) => {
          //setIsLoaded(true);
          setProfileDetail(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          //setIsLoaded(true);
          //setError(error);
        });
    }, [match.params.id]);
    
    /*
    const history = useHistory();

    const deleteItem = async (id) => {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/inventory/${id}/`
      );
      history.push("/inventory");
    };*/

    return (
      <div className="container-fluid employee_profile mb-5">
        <main>
          <Helmet>
            <title>AVI PETS - Pet Express Employee Profile</title>
            <meta name="description" content="Employee Profile" />
          </Helmet>
        </main>
        <section>
          <div className="row">
            
          </div>
        </section>
        <div className="container profile_box mt-3">
          <div className="row d-flex justify-content-center mt-4 mt-2">
            <img
              src={pxlogo}
              className="img-fluid mx-auto d-block"
              alt="pet expreess logo"
            />
          </div>
          <div className="row d-flex justify-content-center mt-2 mb-2">
            <div className="profile_img_box">
              <img
                src={profile.avatar}
                className="img-fluid rounded mx-auto d-block profile_img"
                alt="prfile pic"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-3 mb-2">
            <div className="container card nx-auto">
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-id-card-alt"></i>{" "}
                  <span className="fw-bold">
                    <u>Employee:</u>
                  </span>{" "}
                  {profile.fullname}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary me-5">
                  <i class="fas fa-network-wired me-2"></i>{" "}
                  <span className="fw-bold me-2">
                    <u>Branch:</u>
                  </span>{" "}
                  {profile.office}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-network-wired me-2"></i>{" "}
                  <span className="fw-bold">
                    <u>Department:</u>
                  </span>{" "}
                  {profile.department_type}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-network-wired me-2"></i>{" "}
                  <span className="fw-bold">
                    <u>Position:</u>
                  </span>{" "}
                  {profile.role_title}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary me-5">
                  <i class="fas fa-user-shield me-2"></i>{" "}
                  <span className="fw-bold">
                    <u>STA Number:</u>
                  </span>{" "}
                </h5>
                <h4 className="text-center text-secondary me-3">
                  {profile.sta_number}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container profile_box mt-4">
          <div className="row d-flex justify-content-center mt-3 mb-2">
            <div className="profile_img_box">
              <img
                src={qrcode}
                className="img-fluid rounded mx-auto d-block profile_img"
                alt=" qr code"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-3 mb-2">
            <div className="container card nx-auto">
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-calendar-alt me-2"></i>{" "}
                  <span className="fw-bold">
                    <u>STA Expiration:</u>
                  </span>{" "}
                  {profile.sta_exp}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-car me-3"></i>{" "}
                  <span className="fw-bold">
                    <u>Drivers License:</u>
                  </span>{" "}
                  {profile.drivers_license}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-mobile-alt me-2"></i>{" "}
                  <span className="fw-bold">
                    <u>Phone #:</u>
                  </span>{" "}
                  {profile.phone}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-user-nurse me-1"></i>{" "}
                  <span className="fw-bold">
                    <u>Emergency Contact Name:</u>
                  </span>{" "}
                  {profile.emergency_contact}
                </h5>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-2">
                <h5 className="text-center text-secondary">
                  <i class="fas fa-mobile-alt me-2"></i>{" "}
                  <span className="fw-bold">
                    <u>Emergency Contact #:</u>
                  </span>{" "}
                  {profile.emergency_contact_number}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(EmployeeDetail);
