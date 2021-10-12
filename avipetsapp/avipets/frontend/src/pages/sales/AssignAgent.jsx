import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const AssignAgent = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div className="container">
      <main>
        <Helmet>
          <title>AVI PETS - Assign Sales Agent</title>
          <meta name="description" content="AVI Pets Assign Sales Agent" />
        </Helmet>
      </main>
      <a className="link-primary" href="/salesportal/leaddashboard">
        Go back to leads
      </a>
      <div className="py-5">
        <h2 className="text-secondary text-center">
          Assign an agent to this lead
        </h2>
      </div>
      <form method="post" className="mt-5">
        <input type="text" />
        <button type="submit" className="btn btn-primary px-3 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AssignAgent);
