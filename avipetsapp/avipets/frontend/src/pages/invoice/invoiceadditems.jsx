import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import * as Yup from "yup";
import { ToastContainer, Bounce, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../sass/toast.scss";
import ClientDropdown from "./clientdropdown";
import InvoiceItem from "./invoiceitem";

const InvoiceAddItems = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;

  //const [client, setClient] = useState([]); 
  const [paid, setPaid] = useState("");
  const [invoice_type, setInvoiceType] = useState("");
  const [clientlist, setClientList] = useState([]);
  const [value, setValue] = useState(null);
  const [due_date, setDueDate] = useState("");
  const [invoice_number, setInvoiceNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [vat_amount, setVat] = useState("");
  const [net_amount, setNet] = useState("");
  const [discount_amount, setDiscountAmount] = useState("");
  const [gross_amount, setGross] = useState("");
  const [is_credit_for, setCredit] = useState("");
  const [is_sent, setSent] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [item_net_amount, setItemNetAmount] = useState("");
  const [vat_rate, setVatRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [service, setService] =useState("");

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
  
  const history = useHistory();

  const invoiceSchema = Yup.object({
    client: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    invoice_type: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    due_date: Yup.number().min(0).integer(),
    paid: Yup.boolean(),
    is_sent: Yup.boolean(),
    service: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    invoice_number: Yup.number().min(0).required("Required").integer(),
    notes: Yup.string().max(500, "Must be 500 characters or less"),
    discount: Yup.number().min(0).integer(),
    discount_amount: Yup.number().min(0).integer(),
    is_credit_for: Yup.number().min(0).integer(),
    gross_amount: Yup.number().min(0).required("Required").integer(),
    net_amount: Yup.number().min(0).required("Required").integer(),
    vat_amount: Yup.number().min(0).integer(),
    vat_rate: Yup.number().min(0).integer(),
    quantity: Yup.number().min(0).required("Required").integer(),
    unit_price: Yup.number().min(0).required("Required").integer(),
  });
  const addItem = async (e) => {
    e.preventDefault();

    let formField = new FormData();
    formField.append("paid", paid);
    formField.append("client", clientlist);
    formField.append("invoice_type", invoice_type);
    formField.append("invoice_number", invoice_number);
    formField.append("due_date", due_date);
    formField.append("notes", notes);
    formField.append("vat_amount", vat_amount);
    formField.append("net_amount", net_amount);
    formField.append("gross_amount", gross_amount);
    formField.append("discount_amount", discount_amount);
    formField.append("is_credit_for", is_credit_for);
    formField.append("is_sent", is_sent);
    formField.append("item.unit_price", unit_price);
    formField.append("item.quantity", quantity);
    formField.append("item.discount", discount);
    formField.append("item.service", service);
    formField.append("item.vat_rate", vat_rate);
    formField.append("item.net_amount", item_net_amount);


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
      <div className="row mt-5">
        <div className="text-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <h2 className="font-weight-bold-display-4">Create Invoice</h2>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <div className="container invoice_box_edit p-5">
            <div className="row">
              <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="client">
                      Client
                    </label>
                    <ClientDropdown
                      options={clientlist}
                      prompt="SELECT A CLIENT ..."
                      value={value}
                      name={clientlist}
                      onChange={(val) => setValue(val)}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="invoice_type">
                      Invoice Type
                    </label>
                    <select
                      class="form-select"
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
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <label className="text-light" htmlFor="invoice_number">
                      Invoice Number
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="invoice_number"
                      name="invoice_number"
                      value={invoice_number}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <label className="text-light" htmlFor="due_date">
                      Due Date
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="due_date"
                      name="due_date"
                      value={due_date}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <div className="form-check form-switch d-flex justify-content-center align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={paid}
                        name={paid}
                        id="paid"
                        onChange={(e) => setPaid(e.target.value)}
                      />
                      <label
                        className="form-check-label text-light ms-2"
                        htmlFor="paid"
                      >
                        Is Paid
                      </label>
                    </div>
                  </div>
                  <div className="mt-5 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <div className="form-check form-switch d-flex justify-content-center align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={is_sent}
                        name={is_sent}
                        id="is_sent"
                        onChange={(e) => setSent(e.target.value)}
                      />
                      <label
                        className="form-check-label text-light ms-2"
                        htmlFor="is_sent"
                      >
                        Sent to Client
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="text-light" htmlFor="notes">
                      Notes
                    </label>
                    <p className="text-light">
                      <i>
                        *Write an optional quick note with a maximum of 500
                        characters
                      </i>
                    </p>
                    <CKEditor
                      id="notes"
                      name={notes}
                      value={notes}
                      onChange={(e,editor) => {
                        const data = editor.getData()
                        setNotes(data)
                      }}
                      editor={ClassicEditor}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h4 className="text-light">Add Invoice Items</h4>
                  </div>
                </div>
                <InvoiceItem 
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
                />
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(InvoiceAddItems);
