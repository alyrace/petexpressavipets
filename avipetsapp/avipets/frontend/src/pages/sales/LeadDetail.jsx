import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";


const LeadDetail = ({ isAuthenticated, match }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  //get list
  const [item, setItem] = useState("");
  //error and loading
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = match.params.id;

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/sales/lead/${id}/`)
      .then((res) => {
        //setIsLoaded(true);
        setItem(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        //setIsLoaded(true);
        //setError(error);
      });
  }, [match.params.id]);

  const history = useHistory();

  const deleteItem = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/sales/lead/delete/${id}/`);
    history.push("/salesportal/leaddashboard");
  };

  /*
    if (error) {
      return <>{error.message}</>;
    } else if (!isLoaded) {
      return <>loading...</>;
    } else {
*/
  return (
    <div className="container">
      <main>
        <Helmet>
          <title>AVI PETS - Client Detail</title>
          <meta name="description" content="AVI Pets Client Detail" />
        </Helmet>
      </main>
      <div className="container">
        <section>
          <div className="row mt-5 mb-5">
            <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="d-flex justify-content-center mt-2">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/sales/leaddashboard">Lead Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      <a href="/salesportal">Sales Portal</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="text-center">
                <Link to="/salesportal">
                  <i class="fas fa-list-alt fa-5x client_btn1 center"></i>
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="container inventory_box_detail">
                  <div className="row d-flex justify-content-center ivt_detail_title">
                    <div className="col">
                      <h1 className="text-center mt-0 font-weight-bold-display-4">
                        {item.first_name} <span></span> {item.last_name}
                      </h1>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-start">
                    <div className="d-flex justify-content-center mt-2 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-3 col-xs-3">
                      <div className="container">
                        <h2 className="text-center client_scooby_box p-4 font-weight-bold-display-5">
                          ID: <br />
                          {item.travel_type}
                        </h2>
                      </div>
                    </div>
                    <div className="mt-3 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 col-xs-9">
                      <div className="row">
                        <div className="col">
                          <h3 className="text-secondary text-center">
                            <u className="fw-bold">Category:</u>{" "}
                            <span className="ivt_cat_title">
                              {item.category}
                            </span>
                          </h3>
                        </div>
                      </div>
                      <div className="row mb-0 d-flex justify-content-center">
                        <div className="col-7">
                          <hr className="ivt_hr shadow" />
                        </div>
                      </div>
                      <div className="row mt-0 d-flex justify-content-center">
                        <div className="col">
                          <p className="text-secondary text-center">
                            <u className="fw-bold">Created:</u>{" "}
                            {item.date_added}
                          </p>
                        </div>
                        <div className="col">
                          <p className="text-secondary text-center">
                            <u className="fw-bold">Updated:</u>{" "}
                            {item.last_updated}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 mb-2 d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <h4 className="text-secondary">Lead Details</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="container mx-auto">
                    <div className="row mt-2 pt-2 mb-2 bg-light">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="text-center text-secondary">
                          <b>Lead Name: </b>
                          {item.first_name}
                          <span></span>
                          {item.last_name}
                        </h5>
                      </div>
                    </div>
                    <div className="row mt-2 pt-2 mb-2 bg-dets">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="text-center text-light">
                          <b>Lead Phone: </b>
                          {item.phone_number}
                        </h5>
                      </div>
                    </div>
                    <div className="row mt-2 pt-2 mb-2 bg-light">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="text-center text-secondary">
                          <b>Lead Email: </b>
                          {item.email}
                        </h5>
                      </div>
                    </div>
                    <div className="row mt-2 pt-2 mb-2 bg-dets">
                      <div className="col">
                        <h5 className="text-center text-light">
                          <b>Agent Assigned: </b>
                          {item.agent}
                        </h5>
                      </div>
                    </div>
                    <div className="row mt-2 pt-2 mb-2 bg-light">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="text-center text-secondary">
                          <b>Lead Notes/Description: </b>
                          {item.description}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-4 mb-4 d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <div class="btn-group" role="group">
                        <button
                          className="btn client_btn6"
                          onClick={() => {
                            deleteItem(item.id);
                          }}
                        >
                          <i className="fas fa-trash-alt"></i> DELETE
                        </button>
                        <Link to={`/salesportal/leadupdate/${item.id}`}>
                          <button className="btn ivt_btn7">EDIT</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LeadDetail);
