import React, {useState, useEffect} from "react"
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const ComplianceResources = ({ isAuthenticated }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [listings, setInventoryListings] = useState([]);
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
            `${process.env.REACT_APP_API_URL}/api/compliance/?page=1`
          );
          setIsLoaded(true);
          setInventoryListings(res.data.results);
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
      return listings.map((listing) => {
        return (
          <div key={listing.id} className="row ivt_row mb-5 full_between">
            <div className="col full_center text-center">
              <span>{listing.name}</span>
            </div>
            <div className="col full_center text-secondary text-center">
              <Link to={`/complianceresourcedetail/${listing.id}`}>
                  View Document
              </Link>
            </div>
            <div className="col ivt_date full_center text-center me-2">
              <span className="fw-bolder">{listing.last_updated}</span>
            </div>
          </div>
        );
      });
    };

    const visitPage = (page) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/compliance/?page=${page}`)
        .then((res) => {
          setIsLoaded(true);
          setInventoryListings(res.data.results);
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
          setInventoryListings(res.data.results);
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
          setInventoryListings(res.data.results);
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
            <title>AVI PETS - Compliance Resources Home</title>
            <meta
              name="description"
              content="AVI Pets Compliance Resources Home"
            />
          </Helmet>
        </main>
        <div className="container-fluid table_bg">
          <section>
            <div className="row mb-5">
              <div className="half_center mt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/complianceportal">Complaince Portal</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="text-center text-secondary font-weight-bold-display-4">
                  Pet Express Complaince Resources
                </h2>
              </div>
              {/*<div className="half_center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="container p-4 inventory_box_search">
                    <div className="row">
                      <div className="half_center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="container-fluid">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-2">
                              <button
                                type="button"
                                className="ivt_btn2_outline"
                              >
                                <Link
                                  to="/complianceresourceadd"
                                  className="full_center link-light"
                                >
                                  <i className="fas fa-plus-square fa-2x ivt_btn2 me-2"></i>
                                  Add Resource
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
              <div className="mt-3 half_center w-100 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="table_box p-1 w-100">
                  <div className="custom_table">
                    <div className="mb-2">
                      <div className="text-secondary row full_between bg-light shadow p-3 mb-5 bg-body rounded">
                        <div className="col text-center fw-bold">NAME</div>
                        <div className="col text-center fw-bold">DOCUMENT</div>
                        <div className="col text-center fw-bold">UPDATED</div>
                      </div>
                    </div>
                    <div className="table_body">{renderTableRows()}</div>
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
      </div>
    );}; 
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ComplianceResources);
