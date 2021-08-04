import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../../actions/auth";

import "./resetpassword.scss";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid reset_background">
      <div className="container bg-transparent mt-5 pt-5 mb-5 pb-5 w-50 h-100 text-center">
        <h2 className="mb-5 text-light">Request Password Reset:</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              className="form-control w-70"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <button className="btn btn-outline-light mt-5" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
