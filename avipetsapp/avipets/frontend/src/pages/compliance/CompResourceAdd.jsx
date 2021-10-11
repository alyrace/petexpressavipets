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

const CompResourceAdd = ({ isAuthenticated }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [name, setName] = useState("");
    const [doc, setDoc] = useState("");
    const [description, setDescription] = useState("");
    const fileType = ["application/pdf"]; 
    const [pdfFileError, setPdfFileError] = useState(""); 
    const history = useHistory();
    /*const compResourceSchema = Yup.object({
        name: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        doc: Yup.string()
            .max(50, "Must be 50 characters or less"),
        description: Yup.string()
            .max(500, "Must be 500 characters or less")
            .required("Required"),
    });
*/
    const addResource = async (e) => {
        e.preventDefault();

        let formField = new FormData();

        formField.append("name", name);
        formField.append("doc", doc);
        formField.append("description", description);

        //await compResourceSchema.isValid(formField);

        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/api/compliance/create/`,
          data: formField,
          //headers: {
            //"Content-Type": "application/json",
            //"Content-Type": "multipart/form-data",
          //},
        })
          .then((response) => {
            console.log(response.data);
            toast("Item Added Sucessfully", {
              className: "toast_success",
              draggable: true,
              position: toast.POSITION.TOP_CENTER,
              autoClose: 8000,
            });
            history.push("/compliancereources");
          })
          .catch((err) => console.log("Response body", err.response.data));
        //window.location.reload();
    };
    const uploadFileHandler = (e) => {
       let selectedFile = e.target.files[0];
       if (selectedFile) {
         if (selectedFile && fileType.includes(selectedFile.type)) {
           let reader = new FileReader();
           reader.readAsDataURL(selectedFile);
           reader.onloadend = (e) => {
             setDoc(e.target.value);
             setPdfFileError("");
           };
         } else {
           setPdfFile(null);
           setPdfFileError("Please select valid pdf file");
         }
       }
    }

    return (
      <div>
        <main>
          <Helmet>
            <title>AVI PETS - Add Compliance Resources </title>
            <meta
              name="description"
              content="AVI Pets Add Compliance Resources"
            />
          </Helmet>
        </main>
        <div className="row mt-5">
          <div className="d-flex justify-content-center mt-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/complianceresources">Compliance Resources</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/complianceportal">Compliance Portal</a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="text-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
            <h2 className="font-weight-bold-display-4">Add Resource Item</h2>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xs-12">
            <div className="container inventory_box_edit p-5">
              <div className="row">
                <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                    <div className="container-fluid">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="btn-group" role="group">
                          <Link to="/complianceresources">
                            <i class="mx-auto fas fa-list-alt fa-5x ivt_btn1"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <form className="form-group mt-3 ">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control mt-1 mb-4"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="doc">Add File</label>
                  <input
                    className="form-control mt-1 mb-4"
                    type="file"
                    id="doc"
                    name="doc"
                    value={doc}
                    onChange={uploadFileHandler}
                  />
                  {pdfFileError && (
                    <div className="error-msg">{pdfFileError}</div>
                  )}
                  <br></br>
                  <label htmlFor="description">Description</label>
                  <input
                    className="form-control"
                    type="textarea"
                    id="decription"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="d-flex justify-content-end col">
                    <button
                      onClick={addResource}
                      className="mt-4 mb-4 btn ivt_btn5 right"
                    >
                      Add
                    </button>
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
export default connect(mapStateToProps)(CompResourceAdd);
