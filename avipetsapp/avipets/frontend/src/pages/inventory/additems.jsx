import React, { useState} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";

//import Navbar from "../../components/navigation/navbar.component";

const InventoryAddItems = ({isAuthenticated}) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [item_name, setItemName] = useState("");

  const history = useHistory();

  const inventorySchema = Yup.object({
    category: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    item_name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    quantity: Yup.number().min(0).required("Required").integer(),
  });

  const addItem = async (e) => {
    e.preventDefault();
    
    let formField = new FormData();

    formField.append("category", category);
    formField.append("item_name", item_name);
    formField.append("quantity", quantity);

    await inventorySchema.isValid(formField);

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/inventory/create/`,
      data: formField,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        history.push("/inventory");
      })
      .catch((err) => console.log("Response body", err.response.data));
    window.location.reload();
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>AVI PETS - Inventory Add</title>
          <meta name="description" content="AVI Pets Inventory Add" />
        </Helmet>
      </main>
      <div className="row mt-5">
        <div className="text-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <h2 className="font-weight-bold-display-4">Add Items</h2>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
          <div className="container inventory_box p-5">
            <form className="form-group mt-3 ">
              <select
                class="form-select"
                id="category"
                value={category}
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>Select A Category</option>
                <option name="category">CLEANING</option>
                <option name="category">
                  CRATES
                </option>
                <option name="category">
                  ELECTRONICS
                </option>
                <option name="category">
                  MISCELLANEOUS
                </option>
                <option name="category">
                  OFFICE MAIN
                </option>
                <option name="category">
                  OFFICE SALES
                </option>
                <option name="category">
                  PET
                </option>
                <option name="category">
                  PET TRAVEL
                </option>
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
              <button onClick={addItem} className="mt-4 mb-4 btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(InventoryAddItems);
