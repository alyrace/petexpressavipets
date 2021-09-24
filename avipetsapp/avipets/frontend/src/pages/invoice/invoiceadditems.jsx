import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { ToastContainer, Bounce, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../sass/toast.scss";

const InvoiceAddItems = ({ isAuthenticated }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [invoice_type, setInvoiceType] = useState("");
    const [invoice_number, setInvoiceNumber] = useState("");
    const [client, setClient] = useState("");
    const [phone, setPhone] = useState("");
    const [pet_name, setPetName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [region, setRegion] = useState("");
    const [category_1, setCategoryOne] = useState("");
    const [name_1, setNameOne] = useState("");
    const [price_1, setPriceOne] = useState("");
    const [quantity_1, setQuantityOne] = useState("");
    const [total_1, setTotalOne] = useState("");
    const [category_2, setCategoryTwo] = useState("");
    const [name_2, setNameTwo] = useState("");
    const [price_2, setPriceTwo] = useState("");
    const [quantity_2, setQuantityTwo] = useState("");
    const [total_2, setTotalTwo] = useState("");
    const [category_3, setCategoryThree] = useState("");
    const [name_3, setNameThree] = useState("");
    const [price_3, setPriceThree] = useState("");
    const [quantity_3, setQuantityThree] = useState("");
    const [total_3, setTotalThree] = useState("");
    const [category_4, setCategoryFour] = useState("");
    const [name_4, setNameFour] = useState("");
    const [price_4, setPriceFour] = useState("");
    const [quantity_4, setQuantityFour] = useState("");
    const [total_4, setTotalFour] = useState("");
    const [category_5, setCategoryFive] = useState("");
    const [name_5, setNameFive] = useState("");
    const [price_5, setPriceFive] = useState("");
    const [quantity_5, setQuantityFive] = useState("");
    const [total_5, setTotalFive] = useState("");
    const [paid, setPaid] = useState("");
    const [notes, setNotes] = useState("");
    const [balance, setBalance] = useState("");
    const [total, setTotal] = useState("");
    const [scooby, setScooby] = useState("");

    const history = useHistory();

    const invoiceSchema = Yup.object({
      inovice_type: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      inovice_number: Yup.number().min(0).required("Required").integer(),
      pet_name: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
      category_1: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      client: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      phone: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      address: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      region: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      zipcode: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      scooby: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      name_1: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      price_1: Yup.number().min(0).required("Required").integer(),
      quantity_1: Yup.number().min(0).required("Required").integer(),
      total_1: Yup.number().min(0).required("Required").integer(),
      notes: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      paid: Yup.boolean(),
      total: Yup.number().min(0).required("Required").integer(),
      balance: Yup.number().min(0).required("Required").integer(),
    });
    const addItem = async (e) => {
      e.preventDefault();

      let formField = new FormData();
      
      formField.append("pet_name", pet_name);
      formField.append("category_1", category_1);
      formField.append("price_1", price_1);
      formField.append("name_1", name_1);
      formField.append("quantity_1", quantity_1);
      formField.append("category_2", category_2);
      formField.append("quantity_2", quantity_2);
      formField.append("price_2", price_2);
      formField.append("name_2", name_2);
      formField.append("category_3", category_3);
      formField.append("quantity_3", quantity_3);
      formField.append("price_3", price_3);
      formField.append("name_3", name_3);
      formField.append("category_4", category_4);
      formField.append("quantity_4", quantity_4);
      formField.append("price_4", price_4);
      formField.append("name_4", name_4);
      formField.append("category_5", category_5);
      formField.append("quantity_5", quantity_5);
      formField.append("price_5", price_5);
      formField.append("name_5", name_5);
      formField.append("balance", balance);
      formField.append("total", total);
      formField.append("invoice_type", invoice_type);
      formField.append("invoice_number", invoice_number);
      formField.append("paid", paid);
      formField.append("client", client);
      formField.append("address", address);
      formField.append("zipcode", zipcode);
      formField.append("region", region);
      formField.append("notes", notes);
      formField.append("scooby", scooby);
      formField.append("phone", phone);
    
      await inventorySchema.isValid(formField);

      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/invoice/create/`,
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
          history.push("/invoices");
        })
        .catch((err) => console.log("Response body", err.response.data));
      //window.location.reload();
    };


    return (
      <div>
        <main>
          <Helmet>
            <title>AVI PETS - Invoice Add</title>
            <meta name="description" content="AVI Pets Invoice Add" />
          </Helmet>
          <div className="row mt-5">
            <div className="text-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
              <h2 className="font-weight-bold-display-4">
                Add Items To Invoice
              </h2>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
              <div className="container invoice_box_edit p-5">
                <div className="row">
                  <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                      <div className="container-fluid">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="btn-group" role="group">
                            <Link to="/invoices">
                              <i class="mx-auto fas fa-list-alt fa-5x inc_btn1"></i>
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
                      <div className="col d-flex justify-content-center">
                        <h3 className="text-light">Client Details</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="invoice_tpye">
                          Invoice Type
                        </label>
                        <select
                          class="form-select"
                          id="invoice_type"
                          value={invoice_type}
                          aria-label="Default select example"
                          onChange={(e) => setInvoiceType(e.target.value)}
                        >
                          <option value="All">SELECT AN INVOICE TYPE</option>
                          <option value="invoice_type">Receipt</option>
                          <option value="invoice_type">Proforma Invoice</option>
                          <option value="invoice_type">Invoice</option>
                        </select>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="invoice_number">
                          Invoice Number
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="invoice_number"
                          name="invoice_number"
                          min="0"
                          max="500"
                          value={invoice_number}
                          onChange={(e) => setInvoiceNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="client">
                          Client Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="client"
                          name="client"
                          value={client}
                          onChange={(e) => setClient(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
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
                        <label className="text-light" htmlFor="pet_name">
                          Pet Name(s)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="pet_name"
                          name="pet_name"
                          value={pet_name}
                          onChange={(e) => setPetName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="phone">
                          Phone Number
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
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="address">
                          Address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="address"
                          name="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="region">
                          State/Province and Country
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="region"
                          name="region"
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="zipcode">
                          Zip Code
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
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <label className="text-light" htmlFor="balance">
                          Balance
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="balance"
                          name="balance"
                          value={balance}
                          onChange={(e) => setBalance(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <label className="text-light" htmlFor="paid">
                          Paid
                        </label>
                        <input
                          className="form-control"
                          type="check-box"
                          id="paid"
                          name="paid"
                          value={paid}
                          onChange={(e) => setPaid(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="notes">
                          Notes
                        </label>
                        <input
                          className="form-control"
                          type="textarea"
                          id="notes"
                          name="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <div className="container">
                          <h1 className="text-center inc_qt_box p-4 font-weight-bold-display-5">
                            1
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="name_1">
                          Item 1
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name_1"
                          name="name_1"
                          value={name_1}
                          onChange={(e) => setNameOne(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="category_1">
                          Category 1
                        </label>
                        <select
                          name="category_1"
                          id="category_1"
                          class="form-select"
                          value={category_1}
                          aria-label="Default select 1"
                          onChange={(e) => setCategoryOne(e.target.value)}
                        >
                          <option selected>Select A Category</option>
                          <option value="category_1">CRATE PICK UP</option>
                          <option value="category_1">CRATE DELIVERY</option>
                          <option value="category_1">PET AIRFARE</option>
                          <option value="category_1">PET COMFORT STOP</option>
                          <option value="category_1">PET DELIVERY</option>
                          <option value="category_1">PET BATH/GROOMING</option>
                          <option value="category_1">
                            PET Emergency SERVICE
                          </option>
                          <option value="category_1">
                            PET VETERINARY SERVICE
                          </option>
                          <option value="category_1">PET BOARDING</option>
                          <option value="category_1">PET PICK UP</option>
                          <option value="category_1">OTHER</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="quantity_1">
                          Quantity 1
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="quantity_1"
                          name="quantity_1"
                          min="0"
                          max="500"
                          value={quantity_1}
                          onChange={(e) => setQuantityOne(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="price_1">
                          Price 1
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="price_1"
                          name="price_1"
                          min="0"
                          max="500"
                          value={price_1}
                          onChange={(e) => setPriceOne(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="total_1">
                          Total 1
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="total_1"
                          name="total_1"
                          min="0"
                          max="500"
                          value={total_1}
                          onChange={(e) => setTotalOne(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <div className="container">
                          <h1 className="text-center inc_qt_box p-4 font-weight-bold-display-5">
                            2
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="name_2">
                          Item 2
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name_2"
                          name="name_2"
                          value={name_2}
                          onChange={(e) => setNameTwo(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="category_2">
                          Category 2
                        </label>
                        <select
                          name="category_2"
                          id="category_2"
                          class="form-select"
                          value={category_2}
                          aria-label="Default select 2"
                          onChange={(e) => setCategoryTwo(e.target.value)}
                        >
                          <option selected>Select A Category</option>
                          <option value="category_2">CRATE PICK UP</option>
                          <option value="category_2">CRATE DELIVERY</option>
                          <option value="category_2">PET AIRFARE</option>
                          <option value="category_2">PET COMFORT STOP</option>
                          <option value="category_2">PET DELIVERY</option>
                          <option value="category_2">PET BATH/GROOMING</option>
                          <option value="category_2">
                            PET Emergency SERVICE
                          </option>
                          <option value="category_2">
                            PET VETERINARY SERVICE
                          </option>
                          <option value="category_2">PET BOARDING</option>
                          <option value="category_2">PET PICK UP</option>
                          <option value="category_2">OTHER</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="quantity_2">
                          Quantity 2
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="quantity_2"
                          name="quantity_2"
                          min="0"
                          max="500"
                          value={quantity_2}
                          onChange={(e) => setQuantityTwo(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="price_2">
                          Price 2
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="price_2"
                          name="price_2"
                          min="0"
                          max="500"
                          value={price_2}
                          onChange={(e) => setPriceTwo(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="total_2">
                          Total 2
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="total_2"
                          name="total_2"
                          min="0"
                          max="500"
                          value={total_2}
                          onChange={(e) => setTotalTwo(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <div className="container">
                          <h1 className="text-center inc_qt_box p-4 font-weight-bold-display-5">
                            3
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="name_3">
                          Item 3
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name_3"
                          name="name_3"
                          value={name_3}
                          onChange={(e) => setNameThree(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="category_3">
                          Category 3
                        </label>
                        <select
                          name="category_3"
                          id="category_3"
                          class="form-select"
                          value={category_3}
                          aria-label="Default select 3"
                          onChange={(e) => setCategoryThree(e.target.value)}
                        >
                          <option selected>Select A Category</option>
                          <option value="category_3">CRATE PICK UP</option>
                          <option value="category_3">CRATE DELIVERY</option>
                          <option value="category_3">PET AIRFARE</option>
                          <option value="category_3">PET COMFORT STOP</option>
                          <option value="category_3">PET DELIVERY</option>
                          <option value="category_3">PET BATH/GROOMING</option>
                          <option value="category_3">
                            PET Emergency SERVICE
                          </option>
                          <option value="category_3">
                            PET VETERINARY SERVICE
                          </option>
                          <option value="category_3">PET BOARDING</option>
                          <option value="category_3">PET PICK UP</option>
                          <option value="category_3">OTHER</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="quantity_3">
                          Quantity 3
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="quantity_3"
                          name="quantity_3"
                          min="0"
                          max="500"
                          value={quantity_3}
                          onChange={(e) => setQuantityThree(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="price_3">
                          Price 3
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="price_3"
                          name="price_3"
                          min="0"
                          max="500"
                          value={price_3}
                          onChange={(e) => setPriceThree(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="total_3">
                          Total 3
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="total_3"
                          name="total_3"
                          min="0"
                          max="500"
                          value={total_3}
                          onChange={(e) => setTotalThree(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <div className="container">
                          <h1 className="text-center inc_qt_box p-4 font-weight-bold-display-5">
                            4
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="name_4">
                          Item 4
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name_4"
                          name="name_4"
                          value={name_4}
                          onChange={(e) => setNameFour(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="category_4">
                          Category 4
                        </label>
                        <select
                          name="category_4"
                          id="category_4"
                          class="form-select"
                          value={category_4}
                          aria-label="Default select 4"
                          onChange={(e) => setCategoryFour(e.target.value)}
                        >
                          <option selected>Select A Category</option>
                          <option value="category_4">CRATE PICK UP</option>
                          <option value="category_4">CRATE DELIVERY</option>
                          <option value="category_4">PET AIRFARE</option>
                          <option value="category_4">PET COMFORT STOP</option>
                          <option value="category_4">PET DELIVERY</option>
                          <option value="category_4">PET BATH/GROOMING</option>
                          <option value="category_4">
                            PET Emergency SERVICE
                          </option>
                          <option value="category_4">
                            PET VETERINARY SERVICE
                          </option>
                          <option value="category_4">PET BOARDING</option>
                          <option value="category_4">PET PICK UP</option>
                          <option value="category_4">OTHER</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="quantity_4">
                          Quantity 4
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="quantity_4"
                          name="quantity_4"
                          min="0"
                          max="500"
                          value={quantity_4}
                          onChange={(e) => setQuantityFour(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="price_4">
                          Price 4
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="price_4"
                          name="price_4"
                          min="0"
                          max="500"
                          value={price_4}
                          onChange={(e) => setPriceFour(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="total_4">
                          Total 4
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="total_4"
                          name="total_4"
                          min="0"
                          max="500"
                          value={total_4}
                          onChange={(e) => setTotalFour(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <div className="container">
                          <h1 className="text-center inc_qt_box p-4 font-weight-bold-display-5">
                            5
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="name_5">
                          Item 5
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name_5"
                          name="name_5"
                          value={name_5}
                          onChange={(e) => setNameFive(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="category_5">
                          Category 5
                        </label>
                        <select
                          name="category_5"
                          id="category_5"
                          class="form-select"
                          value={category_5}
                          aria-label="Default select 5"
                          onChange={(e) => setCategoryFive(e.target.value)}
                        >
                          <option selected>Select A Category</option>
                          <option value="category_5">CRATE PICK UP</option>
                          <option value="category_5">CRATE DELIVERY</option>
                          <option value="category_5">PET AIRFARE</option>
                          <option value="category_5">PET COMFORT STOP</option>
                          <option value="category_5">PET DELIVERY</option>
                          <option value="category_5">PET BATH/GROOMING</option>
                          <option value="category_5">
                            PET Emergency SERVICE
                          </option>
                          <option value="category_5">
                            PET VETERINARY SERVICE
                          </option>
                          <option value="category_5">PET BOARDING</option>
                          <option value="category_5">PET PICK UP</option>
                          <option value="category_5">OTHER</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="quantity_5">
                          Quantity 5
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="quantity_5"
                          name="quantity_5"
                          min="0"
                          max="500"
                          value={quantity_5}
                          onChange={(e) => setQuantityFive(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="price_5">
                          Price 5
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="price_5"
                          name="price_5"
                          min="0"
                          max="500"
                          value={price_5}
                          onChange={(e) => setPriceFive(e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-light" htmlFor="total_5">
                          Total 5
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="total_5"
                          name="total_5"
                          min="0"
                          max="500"
                          value={total_5}
                          onChange={(e) => setTotalFive(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <label className="text-light" htmlFor="total">
                            Grand Total
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            id="total"
                            name="total"
                            min="0"
                            max="500"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-end col">
                        <button
                          onClick={addItem}
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
        </main>
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(InvoiceAddItems);
