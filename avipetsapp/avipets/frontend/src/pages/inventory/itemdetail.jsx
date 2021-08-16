import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";


import "./inventory.scss";


const InventoryDetail = ({isAuthenticated, match}) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    //get list 
    const [item, setItem] = useState("");
    //error and loading
    //const [error, setError] = useState(null);
    //const [isLoaded, setIsLoaded] = useState(false);

    

    useEffect(() => {
      window.scrollTo(0, 0);
      const id = match.params.id;

      axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/${id}/`)
        .then((res) => {
          //setIsLoaded(true);
          setItem(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          //setIsLoaded(true);
          //setError(error);
        });
    }, [match.params.id]);
    
    const history = useHistory();
    
    const deleteItem = async (id) => {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/inventory/${id}/`)
      history.push("/inventory");  
    };
    
/*
    if (error) {
      return <>{error.message}</>;
    } else if (!isLoaded) {
      return <>loading...</>;
    } else {
*/
      return (
        <div className="container">
          <main>
            <Helmet>
              <title>AVI PETS - Inventory Detail</title>
              <meta name="description" content="AVI Pets Item Detail" />
            </Helmet>
          </main>
          <div className="container">
            <section>
              <div className="row mt-5 mb-5">
                <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="text-center">
                    <Link to="/inventory">
                      <i class="fas fa-list-alt fa-5x ivt_btn1 center"></i>
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                    <div className="container inventory_box_detail">
                      <div className="row d-flex justify-content-center ivt_detail_title">
                        <div className="col">
                          <h1 className="text-center mt-0 font-weight-bold-display-4">
                            {item.item_name}
                          </h1>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-start">
                        <div className="d-flex justify-content-center mt-2 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-3">
                          <div className="container">
                            <h1 className="text-center ivt_qt_box p-4 font-weight-bold-display-5">
                              {item.quantity}
                            </h1>
                          </div>
                        </div>
                        <div className="mt-3 col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-xs-9">
                          <div className="row">
                            <div className="col">
                              <h3 className="text-secondary text-center">
                                <u className="fw-bold">Category:</u>{" "}
                                <span className="ivt_cat_title">
                                  {item.category}
                                </span>
                              </h3>
                            </div>
                          </div>
                          <div className="row mb-0 d-flex justify-content-center">
                            <div className="col-7">
                              <hr className="ivt_hr shadow" />
                            </div>
                          </div>
                          <div className="row mt-0 d-flex justify-content-center">
                            <div className="col">
                              <p className="text-secondary text-center">
                                <u className="fw-bold">Created:</u>{" "}
                                {item.time_stamp}
                              </p>
                            </div>
                            <div className="col">
                              <p className="text-secondary text-center">
                                <u className="fw-bold">Updated:</u>{" "}
                                {item.last_updated}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 mb-2 d-flex justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                          <div class="btn-group" role="group">
                            <button
                              className="btn ivt_btn6"
                              onClick={() => {
                                deleteItem(item.id);
                              }}
                            >
                              <i className="fas fa-trash-alt"></i> DELETE
                            </button>
                            <Link to={`/inventoryupdate/${item.id}`}>
                              <button className="btn ivt_btn7">EDIT</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default connect(mapStateToProps)(InventoryDetail);
