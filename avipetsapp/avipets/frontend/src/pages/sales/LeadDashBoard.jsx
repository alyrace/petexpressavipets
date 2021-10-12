import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

const LeadDashBoard = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  const [listings, setInventoryListings] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["category", "item_name"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [active, setActive] = useState(1);

  return (
    <div className="container-fluid">
      <main>
        <Helmet>
          <title>AVI PETS - Sales Lead Dashboard</title>
          <meta name="description" content="AVI Pets Sales Lead Dashboard" />
        </Helmet>
      </main>
      <section className="row d-flex">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h3 className="text-secondary">Sales Lead Dashboard</h3>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LeadDashBoard);
