import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";

const EditLead = ({ isAuthenticated, match }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [first_name, setFirst] = useState("");
    const [last_name, setLast] = useState("");
    const [phone_number, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDesc] = useState("");
    const [agent, setAgent] = useState("");
    const [category, setCategory] = useState("");

    const history = useHistory();
    const id = match.params.id;

    const loadItems = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/sales/lead/${id}/`
      );
        console.log(response.data);
        setFirst(response.data.first_name);
        setLast(response.data.item_name);
        setPhone(response.data.phone_nubber);
        setEmail(response.data.phone_email);
        setDesc(response.data.description);
    };

    useEffect(() => {
      loadItems();
    }, []);

    const leadSchema = Yup.object({
      first_name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      phone_number: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    });

    const updateLead = async (e) => {
      e.preventDefault();

      let formField = new FormData();

      formField.append("first_name", first_name);
      formField.append("last_name", last_name);
      formField.append("email", email);
      formField.append("phone_number", phone_number);
      formField.append("description", description);

      await leadSchema.isValid(formField);

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/api/sales/lead/update/${id}/`,
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
            <title>AVI PETS - Sales Lead Edit</title>
            <meta name="description" content="AVI Pets Sales Lead Edit" />
          </Helmet>
        </main>
        <a className="link-primary" href="/">
          Go back to leads
        </a>
        <div className="py-5">
          <h2 className="text-secondary">Edit Lead</h2>
        </div>
        <div className="container">
          <form className="mt-5">
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={first_name}
                id="first_name"
                onChange={(e) => setFirst(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                value={last_name}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                name="phone_number"
                value={phone_number}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="textarea"
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-check-label">Category</label>
              {/*Category and agent drop down? */}
              <input type="text" className="form-control" />
            </div>
            <button onClick={updateLead} className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});


export default connect(mapStateToProps)(EditLead);
