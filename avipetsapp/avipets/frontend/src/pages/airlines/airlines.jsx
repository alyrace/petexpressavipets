import React, {useState, useEffect} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import {Redirect} from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import Pagination from "../../components/pagination/pagination";
//import Loader from 'react-loader-spinner';

//import Navbar from "../../components/navigation/navbar.component";
import "../airlines/airlines.scss";
import airlineimg from "../../images/airline.png";
import AirlineCard from "../../components/airliines/airline.component";
//import axiosInstance from "../../axios";
//import PostLoading from '../../components/airliines/loadingairlines';



const Airlines = ({ isAuthenticated}) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;

  const [airlineListings, setAirlineListings] = useState([]);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/airlines/?page=1`
        );
        

        setAirlineListings(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);

        console.log(res.data.results);
      } catch (err) {}
    };

    fetchData();
  }, []);


  const displayListings = () => {
    let display = [];
    let result = [];

   airlineListings.map((listing) => {
      return display.push(
        <AirlineCard
          title={listing.title}
          photo_main={listing.photo_main}
          slug={listing.slug}
        />
      );
    });

    for (let i = 0; i < airlineListings.length; i += 12) {
      result.push(
        <div key={i}>
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i]}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 1] ? display[i + 1] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 2] ? display[i + 2] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 3] ? display[i + 3] : null}
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 4] ? display[i + 4] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 5] ? display[i + 5] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 6] ? display[i + 6] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 7] ? display[i + 7] : null}
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 8] ? display[i + 8] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 9] ? display[i + 9] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 10] ? display[i + 10] : null}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {display[i + 11] ? display[i + 11] : null}
            </div>
          </div>
        </div>
      );
    }

    return result;
  };

  const visitPage = (page) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/airlines/?page=${page}`)
      .then((res) => {
        setAirlineListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        setActive(page);
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previous_number = () => {
    axios
      .get(previous)
      .then((res) => {
        setAirlineListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (previous) setActive(active - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const next_number = () => {
    axios
      .get(next)
      .then((res) => {
        setAirlineListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (next) setActive(active + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="airline_page">
      <main>
        <Helmet>
          <title>AVI PETS - Airlines</title>
          <meta name="description" content="AVI Pets Airline List" />
        </Helmet>
      </main>
      <div>
        <section className="container-fluid banner">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="text-white text-center mt-3 pt-2">Airlines</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
                Find airline cargo locations, flight codes, and requirements.
              </h2>
            </div>
            <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img
                className="img-fluid text-center mb-5"
                src={airlineimg}
                alt="airline"
              />
            </div>
          </div>
        </section>
        <section className="container bg-transparent">
          <div className="row">
            <div className="center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h3 className="text-dark text-center">Find an Airline</h3>
            </div>
          </div>
          <div className="row align-items-center pt-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12 col-xs-12 mx-auto my-auto">
              <form className="form-group" action="">
                <div className="input-group form-container">
                  <span className="input-group-text">
                    <i
                      class="fas fa-search-location search_airs fa-2x"
                      id="Search"
                    ></i>
                  </span>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append position-relative">
                    <button
                      className="btn btn_airs btn-lg position-absolute top-0 end-0"
                      type="submit"
                      id="Search"
                    >
                      <i class="fa fa-arrow-right fa-sm" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5 mb-5 pt-5 pb-5 airlines_section">
            {displayListings()}
          </div>
        </section>
        <section className="container mt-3 mb-3">
          <div className="row center ms-5 ps-5 me-5 pe-5">
            <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12 mx-auto my-auto">
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
        </section>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Airlines);
