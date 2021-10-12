import React,{useState} from "react"
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";

const CreateLead = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div className="container">
      <main>
        <Helmet>
          <title>AVI PETS - Create Sales Lead</title>
          <meta name="description" content="AVI Pets Create Sales Lead" />
        </Helmet>
      </main>

      <a className="link-primary" href="/">
        Go back to leads
      </a>
      <div className="py-5">
        <h2 className="text-secondary">Create A New Lead</h2>
      </div>
      <div className="container">
        <form className="mt-5">
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              id="first_name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone_number" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              name="phone_number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="textarea"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
          <div className="mb-3">
            <label className="form-check-label">Check me out</label>
            <input type="text" className="form-control" />
          </div>
          <button type="button" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(CreateLead);
