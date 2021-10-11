import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import ReactHtmlParser from "react-html-parser";
import * as Yup from "yup";
import { ToastContainer, Bounce, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ClientDropdown from "./ClientDropdown";
import InvoiceItem from "./invoiceitem";

import InvoiceNav from "./invoicenav";

import "../../sass/toast.scss";
import clientadd from "../clients/ClientAdd";

const InvoiceAddItems = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;

  const [client_name, setClient] = useState("");
  const [client_address, setClientAddress] = useState("");
  const [client_phone, setClientPhone] = useState("");
  const [client_email, setClientEmail] = useState("");
  const [scooby, setScooby] = useState("");
  const [company, setCompany] = useState(
    "Pet Express Intenational Transport"
  );
  const [company_address, setCompanyAddress] = useState("");
  const [company_phone, setCompanyPhone] = useState("");
  const [company_email, setCompanyEmail] = useState("");
  const [invoice_type, setInvoiceType] = useState("");
  const [invoice_number, setInvoiceNumber] = useState("");
  const [due_date, setDueDate] = useState("");
  const [invoice_date, setInvoiceDate] = "";
  const [notes, setNotes] = useState("");
  const [tax, setTax] = useState("");
  const [tax_type, setTaxType] = ("");
  const[enable_taxed, SetEnabled] =("");
  const [gst, setGst] = useState("");
  const [currency, setCurrency]=  useState("$");
  const [net_amount, setNet] = useState("");
  const [sub_total, setSubTotal] = useState("");
  let [total, setTotal] = useState("");
  const [is_credit_for, setCredit] = useState("");

  /*
  Thie folloing is for the client drop down if 
  teh model were connected to invoices 
  const [clientlist, setClientList] = useState([]);
  const [value, setValue] = useState(null);

  */
 //for adding itemes to invoice
  const [items, setItems] = useState([
    {
      id: 1,
      quantity: 0,
      unit_price: 0,
      service: "",
      net_amount: 0,
      discount: 0,
    },
  ]);

  const addItem = (id) => {
    //e.preventDefault();
    setItems([
      ...items,
      {
        id: id + 2,
        unit_price: 0,
        quantity: 0,
        service: "",
        net_amount: 0,
        discount: 0,
      },
    ]);
  };
  const removeItem = (i) => {
    const values = [...items];
    values.splice(i, 1);
    setItems([...values]);
  };

  const handleProductLineChange = (i, e) => {
    const values = [...items];
    values[i][e.target.name] = e.target.value;
    setItems(values);
  };

  const calcGross = () => {
    return (total = (net_amount * tax) / 100);
  };
/* 
Use for fetching client model
from list
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/clients/`
        );
        setClientList(res.data.results);

        console.log(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
*/
  const history = useHistory();

  const invoiceSchema = Yup.object({
    company: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    company_address: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    company_phone: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    company_email: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    client_email: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    client_phone: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    client_address: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    client_name: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    scooby: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    invoice_date: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    invoice_type: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    due_date: Yup.number().min(0).integer(),
    enable_taxed: Yup.boolean(),
    /*service: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Required"),
    */
    currency: Yup.string().max(10, "Must be 10 characters or less"),
    gst: Yup.string().max(10, "Must be 10 characters or less"),
    invoice_number: Yup.number().min(0).required("Required").integer(),
    notes: Yup.string().max(500, "Must be 500 characters or less"),
    //discount: Yup.number().min(0).integer(),
    is_credit_for: Yup.number().min(0).integer(),
    sub_total: Yup.number().min(0).integer(),
    total: Yup.number().min(0).required("Required").integer(),
    net_amount: Yup.number().min(0).required("Required").integer(),
    tax_type: Yup.string().max(20, "Must be 20 characters or less"),
    tax: Yup.number().min(0).integer(),
    quantity: Yup.number().min(0).required("Required").integer(),
    unit_price: Yup.number().min(0).required("Required").integer(),
  });

  const addInvoice = async (e) => {
    e.preventDefault();

    let formField = new FormData();
    //formField.append("client", clientlist);
    formField.append("client_name", client_name);
    formField.append("client_phone", client_phone);
    formField.append("client_email", client_email);
    formField.append("client_address", client_address);
    formField.append("company_phone", company_phone);
    formField.append("company", company);
    formField.append("company_address", company_address);
    formField.append("company_email", company_email);
    formField.append("invoice_date", invoice_date);
    formField.append("invoice_type", invoice_type);
    formField.append("invoice_number", invoice_number);
    formField.append("due_date", due_date);
    formField.append("notes", notes);
    formField.append("tax", tax);
    formField.append("tax_type", tax_type);
    formField.append("enable_taxed", enable_taxed);
    formField.append("net_amount", net_amount);
    formField.append("total", total);
    formField.append("sub_total", sub_total);
    formField.append("gst", gst);
    formField.append("currency", currency);
    formField.append("is_credit_for", is_credit_for);
    formField.append("items.quantity", items.quantity);
    formField.append("items.unit_price", items.unit_price);
    formField.append("items.discount", items.discount);
    formField.append("items.service", items.service);
    formField.append("items.net_amount", items.net_amount);
    formField.append("scooby", scooby);

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
      </main>
      <div className="row">
        <div className="col-xxl-2 col-xl-2  col-lg-2">
          <InvoiceNav />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-12 col-sm-12 col-xs-12">
          <div className="row d-flex justify-content-start mt-2">
            <div className="col bg-light">
              <h3 className="text-secondary">Invoice Generator</h3>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="container invoice_box_edit p-5">
              <div className="row">
                <div className="half_center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                    <div className="container-fluid">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="btn-group" role="group">
                          <Link to="/invoices">
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
                  <div className="row half_center mb-5">
                    <div className="row">
                      <h5 className="text-center inc_text">Company Detail</h5>
                    </div>
                    <hr className="bg-light" />
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-3">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={company}
                        name="company"
                        id="company"
                        placeholder="Pet Express Animal Transport"
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="company_email"
                      >
                        Company Email Contact
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="company_email"
                        name="company_email"
                        value={company_email}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="company_phone"
                      >
                        Company Phone Contact
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="company_phone"
                        name="company_phone"
                        value={company_phone}
                        onChange={(e) => setCompanyPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="company_address"
                      >
                        Company Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="company_address"
                        name="company_address"
                        value={company_address}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row half_center mb-5">
                    <div className="row">
                      <h5 className="text-center inc_text">Client Detail</h5>
                    </div>
                    <hr className="bg-light" />
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="client_name"
                      >
                        Client Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={client_name}
                        name="client_name"
                        id="client_name"
                        onChange={(e) => setClient(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="client_email"
                      >
                        Client Email
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="client_email"
                        name="client_email"
                        value={client_email}
                        onChange={(e) => setClientEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="client_phone"
                      >
                        Client Phone
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="client_phone"
                        name="client_phone"
                        value={client_phone}
                        onChange={(e) => setClientPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="client_address"
                      >
                        Client Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="client_address"
                        name="client_address"
                        value={client_address}
                        onChange={(e) => setClientAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row half_center mb-2">
                    <div className="row">
                      <h5 className="text-center inc_text">Invoice Detail</h5>
                    </div>
                    <hr className="bg-light" />
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="scooby"
                      >
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
                      {/*<label className="text-light" htmlFor="client">
                        Client
                      </label>
                      <ClientDropdown
                        options={clientlist}
                        prompt="SELECT A CLIENT ..."
                        value={value}
                        name={clientlist}
                        onChange={(val) => setValue(val)}
                      />*/}
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="invoice_type"
                      >
                        Invoice Type
                      </label>
                      <select
                        className="form-select"
                        id="invoice_type"
                        value={invoice_type}
                        aria-label="Default select example"
                        onChange={(e) => setInvoiceType(e.target.value)}
                      >
                        <option name="All">SELECT AN INVOICE TYPE</option>
                        <option name="invoice_type">RECIEPT</option>
                        <option name="invoice_type">PROFORMA INVOICE</option>
                        <option name="invoice_type">INVOICE</option>
                        <option name="invoice_type">CREDIT</option>
                        <option name="invoice_type">Quote</option>
                      </select>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="invoice_number"
                      >
                        Invoice Number
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="invoice_number"
                        name="invoice_number"
                        value={invoice_number}
                        placeholder="0001"
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="gst"
                      >
                        GST Number
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="gst"
                        name="gst"
                        value={gst}
                        onChange={(e) => setGst(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="invoice_date"
                      >
                        Invoice Date
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="invoice_date"
                        name="invoice_date"
                        value={invoice_date}
                        placeholder="Select from Calendar"
                        onChange={(e) => setInvoiceDate(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="due_date"
                      >
                        Due Date
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="due_date"
                        name="due_date"
                        value={due_date}
                        placeholder="Select from Calendar"
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="currency"
                      >
                        Currency
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="currency"
                        name="currency"
                        value={currency}
                        placeholder="USD($)"
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-4 row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="notes"
                      >
                        Notes
                      </label>
                      <p className="form-check-label inc_text">
                        <i>
                          *Write an optional quick note with a maximum of 500
                          characters
                        </i>
                      </p>
                      <CKEditor
                        id="notes"
                        name={notes}
                        value={notes}
                        onChange={(e, editor) => {
                          const data = editor.getData();
                          setNotes(data);
                        }}
                        editor={ClassicEditor}
                      />
                    </div>
                  </div>
                  <div className="row mt-4 d-flex align-items-center">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h4 className="form-check-label inc_text">
                        Add Invoice Items
                      </h4>
                    </div>
                  </div>

                  {/*<InvoiceItem 
                vat_amount={vat_amount}
                setVat={setVat}
                net_amount={net_amount}
                setNet={setNet}
                gross_amount={gross_amount}
                setGross={setGross}
                discount={discount}
                setDiscount={setDiscount}
                service={service}
                setService={setService}
                quantity={quantity}
                setQuantity={setQuantity}
                vat_rate={vat_rate}
                setVatRate={setVatRate}
                item_net_amount={item_net_amount}
                setItemNetAmount={setItemNetAmount}
                unit_price={unit_price}
                setUnitPrice={setUnitPrice}
                discount_amount={discount_amount}
                setDiscountAmount={setDiscountAmount}
                />*/}
                  {items.map((item, i) => (
                    <div className="row mt-1" key={item.id}>
                      <hr className="bg-light mt-2" />
                      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <label
                          className="form-check-label inc_text"
                          htmlFor="service"
                        >
                          Service
                        </label>
                        <select
                          className="form-select"
                          id="service"
                          value={item.service}
                          aria-label="Service select"
                          onChange={(e) => handleProductLineChange(i, e)}
                          //onChange={(e) => setService(e.target.value)}
                        >
                          <option name="All">SELECT SERVICE</option>
                          <option name="service">PURCHASE CRATE</option>
                          <option name="service">SHIP CRATE</option>
                          <option name="service">CRATE PICK UP</option>
                          <option name="service">CRATE DELIVERY</option>
                          <option name="service">PET AIRFARE</option>
                          <option name="service">PET COMFORT STOP</option>
                          <option name="service">PET DELIVERY</option>
                          <option name="service">PET BATH/GROOMING</option>
                          <option name="service">PET EMERGENCY SERVICE</option>
                          <option name="service">PET VETERINARY SERVICE</option>
                          <option name="service">PET BOARDING</option>
                          <option name="service">PET PICK UP</option>
                          <option name="service">OTHER</option>
                        </select>
                      </div>
                      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <label
                          className="form-check-label inc_text"
                          htmlFor="quanity"
                        >
                          Quantity
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="quantity"
                          name="quantity"
                          value={item.quantity}
                          onChange={(e) => handleProductLineChange(i, e)}
                          //onChange={(e) => setQuantity(+e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-3 col-xs-3">
                        <label
                          className="form-check-label inc_text"
                          htmlFor="unit_price"
                        >
                          Price
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="unit_price"
                          name="unit_price"
                          value={item.unit_price}
                          onChange={(e) => handleProductLineChange(i, e)}
                          //onChange={(e) => setUnitPrice(+e.target.value)}
                        />
                      </div>
                      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <label
                          className="form-check-label inc_text"
                          htmlFor="item_net_amount"
                        >
                          Net Amount
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          id="item_net_amount"
                          name="item.net_amount"
                          value={
                            (item.net_amount = item.quantity * item.unit_price)
                          }
                          onChange={(e) => handleProductLineChange(i, e)}
                          //onChange={}
                          //onChange={(e) => setItemNetAmount(e.target.value)}
                        />
                      </div>
                      <div className="col-1 mt-4">
                        <button
                          type="button"
                          disabled={item.id === 1}
                          onClick={() => removeItem(i)}
                          className="btn btn-danger text-center"
                        >
                          <i className="fas fa-times-circle"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 mt-4">
                      <button
                        type="button"
                        onClick={() => addItem()}
                        className="btn btn-primary"
                      >
                        <i className="fas fa-plus-circle"></i> Add Items
                      </button>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-3">
                    <hr className="bg-light" />
                    <h4 className="form-check-label inc_text text-center mb-4">
                      Order Summary
                    </h4>
                    <hr className="bg-light" />
                  </div>
                  <div className="row d-flex justify-content-end">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="net_amount"
                      >
                        Subtotal
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="net_amount"
                        name="net_amount"
                        value={net_amount}
                        onChange={(e) => setNet(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="is_credit_for"
                      >
                        Credit
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="is_credit_for"
                        name="is_credit_for"
                        value={is_credit_for}
                        onChange={(e) => setCredit(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col">
                      <label htmlFor="">Enable Tax?</label>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="btn btn-outline-dark px-5 fw-bold shadow"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-primary px-5 fw-bolder shadow"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="">Tax Type?</label>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="btn btn-outline-primary fw-bold px-5"
                        >
                          Inclusive
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-dark fw-bolder px-5"
                        >
                          Exclusive
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="tax"
                      >
                        Tax (%)
                      </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        id="tax"
                        name="tax"
                        value={tax}
                        onChange={(e) => setTax(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8">
                      <label
                        className="form-check-label inc_text"
                        htmlFor="total"
                      >
                        Gross Total
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="total"
                        name="total"
                        value={calcGross()}
                        onChange={(e) => setTotal(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex justify-content-end col">
                      <button
                        onClick={addInvoice}
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(InvoiceAddItems);
