import React, {useState, useHistory } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const AirlineSearch = (props) =>{
    const [loading, setLoading] = useState(false);
    const search = "search";
    const [appState, setAppState] = useState({
      search: "",
      posts: [],
    });
    
    let history = useHistory();
       const goSearch = (e) => {
         history.push({
           pathname: "/search/",
           search: "?search=" + airlineListings.search,
         });
         //window.location.reload();

         setLoading(true);

         const config = {
           headers: {
             "Content-Type": "application/json",
           },
         };

         axios
           .post(
             `${process.env.REACT_APP_API_URL}/api/airlines/search`,
             "name",
             config
           )
           .then((res) => {
             setLoading(false);
             props.setListings(res.data);
             window.scrollTo(0, 0);
           })
           .catch((err) => {
             setLoading(false);
             window.scrollTo(0, 0);
           });
       };
    return (
      <div>
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
              value={airlineListings.search}
              onChange={(newValue) => setAirlineListings({ search: newValue })}
              onRequestSearch={() => goSearch(airlineListings.search)}
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
    );
}

export default AirlineSearch
