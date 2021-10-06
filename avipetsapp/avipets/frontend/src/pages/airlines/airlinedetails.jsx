import React, { useState, useEffect } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect} from "react-router-dom";


//import Navbar from "../../components/navigation/navbar.component";
import Carousel from '../../components/carousel/carousel.component';
import "../../sass/carousel.scss";

const AirlineDetails = ({isAuthenticated, match}) => {

  const [listings, setAirlineDetailListings] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);  
    const slug = match.params.id;

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/airlines/${slug}`)
      .then((res) => {
        setAirlineDetailListings(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, [match.params.id]);

  const displayDetailListingImages = () => {
    let images = [];
    images.push(
      <Carousel
        photo_1={listings.photo_1}
        photo_2={listings.photo_2}
        photo_3={listings.photo_3}
        photo_4={listings.photo_4}
        photo_5={listings.photo_5}
        photo_6={listings.photo_6}
      />
    );
    return images;
  };
  if (isAuthenticated === false) return <Redirect to="/login" />;
  return (
    <div>
      <main>
        <Helmet>
          <title>AVI PETS - Airline Details | {`${listings.title}`}</title>
          <meta name="description" content="AVI Pets Airline Details" />
        </Helmet>
      </main>
      <div className="container-fluid">
        <section className="container-fluid banner">
          <div className="row">
            <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <img
                className="img-fluid text-center mt-5 mb-5 pt-5 pb-5"
                src={listings.photo_main}
                alt="airline"
              />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
              <h3 className="text-center text-secondary">Airline Details</h3>
              <hr />
            </div>
          </div>
          <div className="d-flex justify-content-center bg-light col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12 mx-auto my-auto">
            <div className="row mt-3 mb-3">
              <div className="mt-1 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 col-sm-12 col-xs-12">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-secondary">
                        <th scope="col">{listings.title}</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_bga text-light">
                        <th scope="row">
                          <i className="fas fa-map-marker-alt"></i>
                          <span className="ms-2">Address</span>
                        </th>
                        <td className="text-center">
                          <p>{listings.address}</p>
                          <br />
                          <p>
                            {listings.city}, {listings.state} {listings.zipcode}
                          </p>
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-calendar-day"></i>
                          <span className="ms-2">Last Updated</span>
                        </th>
                        <td className="text-center">{listings.last_updated}</td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-network-wired"></i>
                          <span className="ms-2">Airline Network</span>
                        </th>
                        <td className="text-center">
                          {listings.airline_network}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-phone"></i>
                          <span className="ms-2">Cargo Phone Number</span>
                        </th>
                        <td className="text-center">{listings.cargo_phone}</td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-phone"></i>
                          <span className="ms-2">
                            Cargo Reservation Phone Number
                          </span>
                        </th>
                        <td className="text-center">
                          {listings.cargo_reservation_phone}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-laptop-house"></i>
                          <span className="ms-2">Website</span>
                        </th>
                        <td className="text-center">{listings.website}</td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-user-clock"></i>
                          <span className="ms-2">Visted</span>
                        </th>
                        <td className="text-center">
                          {listings.frequently_visited}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-file-invoice-dollar"></i>
                          <span className="ms-2">Have Account</span>
                        </th>
                        {listings.have_account ? (
                          <td className="text-center">
                            {listings.have_account}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.have_account}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-hashtag"></i>
                          <span className="ms-2">Account Number</span>
                        </th>
                        <td className="text-center">
                          {listings.account_number}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-plane"></i>
                          <span className="ms-2">Pet Flight Options</span>
                        </th>
                        <td className="text-center">
                          {listings.pet_flight_options}
                        </td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-plane"></i>
                          <span className="ms-2">Check In Type</span>
                        </th>
                        <td className="text-center">
                          {listings.pets_checkin_options}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-sort-numeric-down-alt"></i>
                          <span className="ms-2">Terminal Number</span>
                        </th>
                        <td className="text-center">
                          {listings.terminal_number}
                        </td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-hourglass-half"></i>
                          <span className="ms-2">Cutoff Period</span>
                        </th>
                        <td className="text-center">
                          {listings.cut_off_dealine}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-hourglass-half"></i>
                          <span className="ms-2">Pick Up Delay</span>
                        </th>
                        <td className="text-center">
                          {listings.pick_up_delay}
                        </td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-calendar-minus"></i>
                          <span className="ms-2">Earliest Booking Date</span>
                        </th>
                        <td className="text-center">
                          {listings.earliest_book_date}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-parking"></i>
                          <span className="ms-2">Has Parking</span>
                        </th>
                        {listings.onsite_parking ? (
                          <td className="text-center">
                            {listings.onsite_parking}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.onsite_parking}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-car"></i>
                          <span className="ms-2">Has Loading Ramp</span>
                        </th>
                        {listings.has_loading_ramp ? (
                          <td className="text-center">
                            {listings.has_loading_ramp}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.has_loading_ramp}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-plane-arrival"></i>
                          <span className="ms-2">Import Station Location</span>
                        </th>
                        <td className="text-center">
                          {listings.import_station}
                        </td>
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-plane-departure"></i>
                          <span className="ms-2">Export Station Location</span>
                        </th>
                        <td className="text-center">
                          {listings.export_station}
                        </td>
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-hourglass-half"></i>
                          <span className="ms-2">Food Needed</span>
                        </th>
                        {listings.food_needed ? (
                          <td className="text-center">
                            {listings.food_needed}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.food_needed}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-tag"></i>
                          <span className="ms-2">Contact Label Needed</span>
                        </th>
                        {listings.contact_label_needed ? (
                          <td className="text-center">
                            {listings.contact_label_needed}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.contact_label_needed}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-camera-retro"></i>
                          <span className="ms-2">Photo of Pet Needed</span>
                        </th>
                        {listings.photo_of_pet_needed ? (
                          <td className="text-center">
                            {listings.photo_of_pet_needed}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.photo_of_pet_needed}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fas fa-file-contract"></i>
                          <span className="ms-2">Acclimation Needed</span>
                        </th>
                        {listings.acclimation_needed ? (
                          <td className="text-center">
                            {listings.acclimation_needed}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.acclimation_needed}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="text-secondary">
                        <th scope="row">
                          <i className="fas fa-sun"></i>
                          <span className="ms-2">Weather Restrictions</span>
                        </th>
                        {listings.weather_restrictions ? (
                          <td className="text-center">
                            {listings.weather_restrictions}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.weather_restrictions}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                      <tr className="table_bg text-light">
                        <th scope="row">
                          <i className="fab fa-pagelines"></i>
                          <span className="ms-2">Has Grass</span>
                        </th>
                        {listings.has_grass ? (
                          <td className="text-center">
                            {listings.has_grass}
                            <i className="fas fa-check-circle fa-lg"></i>
                          </td>
                        ) : (
                          <td className="text-center">
                            {listings.has_grass}
                            <i className="fas fa-times-circle fa-lg"></i>
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 col-sm-12 col-xs-12">
                <div className="row mb-1">
                  <div className="airline_dets">
                    <h2 className="text-light text-center">
                      Special Instructions
                    </h2>
                  </div>
                  <div className="mt-1">{listings.special_instructions}</div>
                </div>
                <div className="row mt-1 mb-2">
                  <div className="airline_dets">
                    <h2 className="text-light text-center">
                      Weather Restrictions
                    </h2>
                  </div>
                  <div className="mt-1">ADD WEATHER RESTICTION SECTION</div>
                </div>
                <div className="row mt-2">
                  <div className="airline_dets">
                    <h2 className="text-light text-center">
                      Breed Restrictions
                    </h2>
                  </div>
                  <div className="mt-1">{listings.breed_restrictions}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5 d-flex justify-content-center row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
            {displayDetailListingImages()}
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="bg-primary">
              <h2 className="text-light">Airline Documents</h2>
            </div>
          </div>
          <div className="row">
            <div className="bg-primary">
              <h2 className="text-light">Driver Notes</h2>
            </div>
          </div>
          <div className="row">
            <div className="bg-primary">
              <h2 className="text-light">Compliance Notes</h2>
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
export default connect(mapStateToProps)(AirlineDetails);