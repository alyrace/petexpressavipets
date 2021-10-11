import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";

import "./client.scss";
import Pagination from "../../components/pagination/Pagination";

const ClientHome = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  const [listings, setClientListings] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["active_client", "client_name"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/clients/?page=1`
        );
        setIsLoaded(true);
        setClientListings(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);

        console.log(res.data.results);
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    };

    fetchData();
  }, []);

  const renderTableRows = () => {
    function searchInvoices(listings) {
      return listings.filter((listing) => {
        if (listing.active_client == filterParam) {
          return searchParam.some((newItem) => {
            return (
              listing[newItem].toString().toLowerCase().indexOf(search) > -1
            );
          });
        } else if (filterParam == "All") {
          return searchParam.some((newItem) => {
            return (
              listing[newItem].toString().toLowerCase().indexOf(search) > -1
            );
          });
        }
      });
    }

    return searchInvoices(listings).map((listing) => {
      return (
        <Link to={`/clientdetail/${listing.id}/`}>
          <div key={listing.id} className="row ivt_row mb-5 full_between">
            <div className="col-3 full_center text-center fw-bold scooby_clt2">
              <span>{listing.active_client}</span>
            </div>
            <div className="col full_center text-center">
              <Link
                className="scooby_clt fw-bold"
                to={`/clientdetail/${listing.id}/`}
              >
                {listing.scooby}
              </Link>
            </div>
            <div className="col client_clt full_center text-center fw-bolder">
              <span>{listing.client_name}</span>
            </div>
            <div className="col full_center text-center scooby_clt2">
              <span>{listing.last_updated}</span>
            </div>
          </div>
        </Link>
      );
    });
  };
  const visitPage = (page) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/clients/?page=${page}`)
      .then((res) => {
        setIsLoaded(true);
        setClientListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        setActive(page);
        console.log(res.data.results);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  };

  const previous_number = () => {
    axios
      .get(previous)
      .then((res) => {
        setIsLoaded(true);
        setClientListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (previous) setActive(active - 1);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  };

  const next_number = () => {
    axios
      .get(next)
      .then((res) => {
        setIsLoaded(true);
        setClientListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (next) setActive(active + 1);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  };

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div>
        <main>
          <Helmet>
            <title>AVI PETS - Client Home </title>
            <meta name="description" content="AVI Pets Client Home Generator" />
          </Helmet>
          <div className="container-fluid table_bg">
            <section>
              <div className="row mt-5 mb-5">
                <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="half_center mt-2">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/dashboard">Dashboard</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          <a href="/invoices">Invoices</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <h2 className="text-center text-secondary font-weight-bold-display-4">
                    Pet Express Client List
                  </h2>
                </div>
                <div className="half_center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                    <div className="container p-5 invoice_box_search">
                      <div className="row">
                        <div className="half_center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="row">
                            <div className="container-fluid">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="btn-group" role="group">
                                  <Link to="/clientadd">
                                    <i className="fas fa-plus-square fa-5x inc_btn2"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="half_center mt-2 mb-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <input
                            className="form-control"
                            type="text"
                            name="set_search"
                            id="set_search"
                            placeholder="Search Invoices"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                        <div className="half_center mb-2 mt-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <select
                            /* 
                     here we create a basic select input
                     we set the value to the selected value 
                     and update the setC() state every time onChange is called
                    */
                            className="form-select form-select-lg"
                            id="active_client"
                            onChange={(e) => {
                              setFilterParam(e.target.value);
                            }}
                            aria-label="Filter Clients"
                          >
                            <option value="All">ALL CATEGORIES</option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3 half_center w-100 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="table_box p-1 w-100">
                    <div className="custom_table">
                      <div className="mb-2">
                        <div className="text-secondary row full_between">
                          <div className="col text-center">CAT</div>
                          <div className="col text-center">SCOOBY</div>
                          <div className="col text-center">CLIENT</div>
                          <div className="col text-center">DATE</div>
                        </div>
                      </div>
                      <div>{renderTableRows()}</div>
                    </div>
                    <div className="half_center mb-3">
                      <Pagination
                        itemsPerPage={12}
                        count={count}
                        visitPage={visitPage}
                        previous={previous_number}
                        next={next_number}
                        active={active}
                        setActive={setActive}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(ClientHome);
