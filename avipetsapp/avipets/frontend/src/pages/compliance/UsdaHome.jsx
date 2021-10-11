import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import usdaOffices from "./offices/usdaOffices";
import UsdaItem from "./UsdaItem";

const UsdaHome = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div className="container bg-secondary">
      <main>
        <Helmet>
          <title>AVI PETS - USDA Offices Home</title>
          <meta name="description" content="AVI Pets USDA Offices Home" />
        </Helmet>
      </main>
      <div className="row mt-5 mb-3">
        <h2 className="text-center text-light mt-3">USDA Office List</h2>
      </div>
      <div className="row mt-5">
        {usdaOffices?.map((office) => (
          <UsdaItem key={office.title} title={office.title} url={office.url} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(UsdaHome);
