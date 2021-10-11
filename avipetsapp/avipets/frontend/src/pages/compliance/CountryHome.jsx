import React from "react"
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect} from "react-router-dom";
import usdaPermitResources from "./countries/usdaPermitResources"
import CountryItem from "./CountryItem";

const CountryHome = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div className="container bg_comp">
      <main>
        <Helmet>
          <title>AVI PETS - Country Permits Home</title>
          <meta name="description" content="AVI Pets Country Permits Home" />
        </Helmet>
      </main>
      <div className="row mt-5 mb-3">
        <h2 className="text-center text-light mt-3">Country Permit List</h2>
      </div>
      <div className="row d-flex justify-content-center">
        {usdaPermitResources?.map((item) => (
          <CountryItem key={item.title} title={item.title} url={item.url} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(CountryHome);
