import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";

import CheckListComponent from "./CheckListComponent";

const OpsVetCheckList = ({ isAuthenticated, match }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    return (
      <div className="container opsvet-bg">
        <main>
          <Helmet>
            <title>AVI PETS - Operations Vet Checklist</title>
            <meta name="description" content="Operations Vet Checklist" />
          </Helmet>
        </main>
        <div className="row text-center text-light">
          <h2 className="pt-3">Operations Vet Checklist</h2>
        </div>
        <CheckListComponent />
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(OpsVetCheckList);
