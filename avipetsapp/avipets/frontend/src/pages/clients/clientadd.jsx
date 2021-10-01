import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { ToastContainer, Bounce, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./client.scss";
const ClientAdd = ({isAuthenticated}) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  const [active_client, setActiveClient] = useState("");
  const [client_name, setName] = useState("");
  const [scooby, setScooby] = useState("");
  const [phone, setPhone] = useState("");
  const [pets, setPets] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddressOne] = useState("");
  const [address2, setAddressTwo] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [primary_contact, setPrimaryContact] = useState("");  
  const [contact_reference, setContactRef] = useState("");

  const history = useHistory();

  const clientSchema = Yup.object({
    active_client: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    client_name: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    scooby: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    phone: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    email: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    address1: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    address2: Yup.string().max(100, "Must be 100 characters or less"),
    country: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    place: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    zipcode: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    primary_contact: Yup.string().max(100, "Must be 100 characters or less"),
    contact_reference: Yup.string().max(100, "Must be 100 characters or less"),
    pets: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
  });

  const addClient = async (e) => {
    e.preventDefault();

    let formField = new FormData();
    formField.append("active_client", active_client);
    formField.append("client_name", client_name);
    formField.append("scooby", scooby);
    formField.append("email", email);
    formField.append("phone", phone);
    formField.append("primary_contact", primary_contact);
    formField.append("contact_reference", contact_reference);
    formField.append("address1", address1);
    formField.append("address2", address2);
    formField.append("place", place);
    formField.append("country", country);
    formField.append("zipcode", zipcode);
    formField.append("pets", pets);

    await clientSchema.isValid(formField);
    
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/clients/create/`,
      data: formField,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        toast("Item Added Sucessfully", {
          className: "toast_success",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 8000,
        });
        history.push("/clients");
      })
      .catch((err) => console.log("Response body", err.response.data));
  }

  return (
    <div>
      <main>
        <Helmet>
          <title>AVI PETS - Client Add</title>
          <meta name="description" content="AVI Pets Client Add" />
        </Helmet>
      </main>
      <div className="row mt-5">
        <div className="d-flex justify-content-center mt-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a href="/invoices">Invoices</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="text-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <h2 className="font-weight-bold-display-4">Add Client</h2>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <div className="container invoice_box_edit p-5">
            <div className="row">
              <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="container-fluid">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="btn-group" role="group">
                        <Link to="/clients">
                          <i className="mx-auto fas fa-list-alt fa-5x inc_btn1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <form className="form-group mt-3 ">
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <select
                      name="active_client"
                      id="active_client"
                      class="form-select"
                      value={active_client}
                      aria-label="Category select"
                      onChange={(e) => setActiveClient(e.target.value)}
                    >
                      <option selected>Select A Category</option>
                      <option name="active_client">ACTIVE</option>
                      <option name="active_client">INACTIVE</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="client_name">
                      Client Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="client_name"
                      name="client_name"
                      value={client_name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="scooby">
                      Scooby Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="scooby"
                      name="scooby"
                      value={scooby}
                      onChange={(e) => setScooby(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="primary_contact">
                      Client Primary Contact
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="primary_contact"
                      name="primary_contact"
                      value={primary_contact}
                      onChange={(e) => setPrimaryContact(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="phone">
                      Client Phone
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="contact_reference">
                      Client Contact Reference
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="contact_reference"
                      name="contact_reference"
                      value={contact_reference}
                      onChange={(e) => setContactRef(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="email">
                      Client Email
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <dov className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="address1">
                      Client Address Line 1
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="address1"
                      name="address1"
                      value={address1}
                      onChange={(e) => setAddressOne(e.target.value)}
                    />
                  </dov>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="address2">
                      Client Address Line 2
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="address2"
                      name="address2"
                      value={address2}
                      onChange={(e) => setAddressTwo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="place">
                      City, State or Province
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="place"
                      name="place"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="country">
                      Country
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="country"
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="zipcode">
                      ZipCode
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="pets">
                      Client Pet Name(s)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="pets"
                      name="pets"
                      value={pets}
                      onChange={(e) => setPets(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-end col">
                    <button
                      onClick={addClient}
                      className="mt-4 mb-4 btn inc_btn5 right"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ClientAdd);