import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";

//import Navbar from "../../components/navigation/navbar.component";

const InventoryEditItems = ({ isAuthenticated, match }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;

  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [item_name, setItemName] = useState("");

  const history = useHistory();
  const id = match.params.id;

  const loadItems = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/inventory/update-items/${id}/`
    );
    console.log(response.data);
    setCategory(response.data.category)
    setItemName(response.data.item_name);
    setQuantity(response.data.quantity);
  };

  useEffect(() => {
      loadItems()
  }, [])

  const inventorySchema = Yup.object({
    category: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    item_name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    quantity: Yup.number().min(0).required("Required").integer(),
  });

  const updateItem = async (e) => {
    e.preventDefault();
    
    let formField = new FormData();
    
    formField.append("category", category);
    formField.append("item_name", item_name);
    formField.append("quantity", quantity);
    
    await inventorySchema.isValid(formField);
  
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/api/inventory/update-items/${id}/`,
      data: formField,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
        console.log(response.data);
        history.push("/inventory");
      })
      .catch((err) => console.log("Response body", err.response.data));
        window.location.reload();
    }

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>AVI PETS - Inventory Edit</title>
          <meta name="description" content="AVI Pets Inventory Edit" />
        </Helmet>
      </main>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="d-flex justify-content-center mt-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/dashboard">Dashboard</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="text-center mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <h2 className="font-weight-bold-display-4">Update Item</h2>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <div className="container inventory_box_edit p-5">
            <div className="row">
              <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="container-fluid">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="btn-group" role="group">
                        <Link to="/inventory">
                          <i class="mx-auto fas fa-list-alt fa-5x ivt_btn1"></i>
                        </Link>
                        <div class="invisible">
                          <i class="fas fa-square-full text-transparent"></i>
                        </div>
                        <Link to="/inventoryadd">
                          <i class="fas fa-plus-square fa-5x ivt_btn2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
                <form className="form-group mt-3 ">
                  <label htmlFor="category">Category</label>
                  <select
                    class="form-select"
                    value={category}
                    id="category"
                    aria-label="Default select example"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option selected>Select A Category</option>
                    <option name="category">CLEANING</option>
                    <option name="category">CRATES</option>
                    <option name="category">ELECTRONICS</option>
                    <option name="category">MISCELLANEOUS</option>
                    <option name="category">OFFICE MAIN</option>
                    <option name="category">OFFICE OTHER</option>
                    <option name="category">OFFICE SALES</option>
                    <option name="category">PET</option>
                    <option name="category">PET TRAVEL</option>
                  </select>
                  <label htmlFor="item_name">Item Name</label>
                  <input
                    className="form-control mt-1 mb-4"
                    type="Text"
                    id="item_name"
                    name="item_name"
                    value={item_name}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    max="500"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <div className="container-fluid d-flex justify-content-end">
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <button
                          onClick={updateItem}
                          className="mt-4 btn ivt_btn4 text-center"
                        >
                          UPDATE
                        </button>
                      </div>
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

export default connect(mapStateToProps)(InventoryEditItems);
/*
<form className="form-group mt-3 ">
              <label htmlFor="category">Category</label>
              <select
                class="form-select"
                value={category}
                id="category"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>Select A Category</option>
                <option name="category">CLEANING</option>
                <option name="category">CRATES</option>
                <option name="category">ELECTRONICS</option>
                <option name="category">MISCELLANEOUS</option>
                <option name="category">OFFICE MAIN</option>
                <option name="category">OFFICE SALES</option>
                <option name="category">PET</option>
                <option name="category">PET TRAVEL</option>
              </select>
              <label htmlFor="item_name">Item Name</label>
              <input
                className="form-control mt-1 mb-4"
                type="Text"
                id="item_name"
                name="item_name"
                value={item_name}
                onChange={(e) => setItemName(e.target.value)}
              />
              <label htmlFor="quantity">Quantity</label>
              <input
                className="form-control"
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="500"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className="container d-flex justify-content-end">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <button
                      onClick={updateItem}
                      className="mt-4 mb-4 me-1 btn btn-sm btn-outline-danger text-center"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <button
                      onClick={updateItem}
                      className="mt-4 mb-4 btn btn-sm btn-outline-primary text-center"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
*/