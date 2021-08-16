import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import {CSVLink} from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import Pagination from "../../components/pagination/pagination";

import "./inventory.scss";


const Inventory = ({isAuthenticated}) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  const [listings, setInventoryListings] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["category", "item_name"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [active, setActive] = useState(1);
  //const [exportData, setExportData] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/inventory/?page=1`
        );
        setIsLoaded(true);
        setInventoryListings(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);

        console.log(res.data.results);
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    };

    fetchData();
  }, []);
 

  const renderTableRows = () => {
    function searchInventory(listings) {
      return listings.filter((listing) => {
        if (listing.category == filterParam) {
          return searchParam.some((newItem) => {
            return (
              listing[newItem]
                .toString()
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        } else if (filterParam == "All") {
          return searchParam.some((newItem) => {
            return (
              listing[newItem]
                .toString()
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        }
      });
    }
    
   return searchInventory(listings).map(listing => {
     return (
       <tr key={listing.id}>
         <td className="text-center text-secondary">{listing.category}</td>
         <td className="text-center">
           <Link className="link-danger" to={`/inventorydetail/${listing.id}/`}>
             {listing.item_name}
           </Link>
         </td>
         <td className="text-center text-secondary">{listing.quantity}</td>
         <td className="text-center text-secondary">{listing.last_updated}</td>
       </tr>
     );
   })
 }
 const visitPage = (page) => {
   axios
     .get(`${process.env.REACT_APP_API_URL}/api/inventory/?page=${page}`)
     .then((res) => {
       setIsLoaded(true);
       setInventoryListings(res.data.results);
       setPrevious(res.data.previous);
       setNext(res.data.next);
       setActive(page);
       console.log(res.data.results);
     })
     .catch((err) => {
        setIsLoaded(true);
        setError(err);
     });
 };

 const previous_number = () => {
   axios
     .get(previous)
     .then((res) => {
       setIsLoaded(true);
       setInventoryListings(res.data.results);
       setPrevious(res.data.previous);
       setNext(res.data.next);
       if (previous) setActive(active - 1);
     })
     .catch((err) => {
        setIsLoaded(true);
        setError(err);
     });
 };

 const next_number = () => {
   axios
     .get(next)
     .then((res) => {
       setIsLoaded(true);
       setInventoryListings(res.data.results);
       setPrevious(res.data.previous);
       setNext(res.data.next);
       if (next) setActive(active + 1);
     })
     .catch((err) => {
        setIsLoaded(true);
        setError(err);
     });
 };

 const exportPDF = () => {
   const unit = "pt";
   const size = "A4"; // Use A1, A2, A3 or A4
   const orientation = "portrait"; // portrait or landscape

   const marginLeft = 40;
   const doc = new jsPDF(orientation, unit, size);

   doc.setFontSize(15);

   const title = "Pet Express Inventory";
   const headers = [["CATEGORY", "ITEM NAME", "QUANTITY", "LAST UPDATED"]];

   const data = listings.map((listing) => [
     listing.category,
     listing.item_name,
     listing.quantity,
     listing.last_updated,
   ]);

   let content = {
     startY: 50,
     head: headers,
     body: data,
   };

   doc.text(title, marginLeft, 40);
   doc.autoTable(content);
   doc.save("report.pdf");
 };

 if (error) {
          return <>{error.message}</>;
    } else if (!isLoaded) {
          return <>loading...</>;
  } else {
  return (
    <div>
      <main>
        <Helmet>
          <title>AVI PETS - Inventory</title>
          <meta name="description" content="AVI Pets Inventory" />
        </Helmet>
      </main>
      <div className="container">
        <section>
          <div className="row mt-5 mb-5">
            <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center text-secondary font-weight-bold-display-4">
                Pet Express Inventory
              </h2>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="container p-5 inventory_box_search">
                  <div className="row">
                    <div className="d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="btn-group" role="group">
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
                    <div className="d-flex justify-content-center mt-2 mb-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        name="set_search"
                        id="set_search"
                        placeholder="Search Inventory"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-center mb-2 mt-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <select
                        /* 
                     here we create a basic select input
                     we set the value to the selected value 
                     and update the setC() state every time onChange is called
                    */
                        class="form-select form-select-lg"
                        id="category"
                        onChange={(e) => {
                          setFilterParam(e.target.value);
                        }}
                        aria-label="Filter Inventory"
                      >
                        <option value="All">ALL CATEGORIES</option>
                        <option value="CLEANING">Cleaning</option>
                        <option value="CRATES">Crates</option>
                        <option value="ELECTRONICS">Electronics</option>
                        <option value="MISCELLANEOUS">Miscellaneous</option>
                        <option value="OFFICE MAIN">Office Main</option>
                        <option value="OFFICE OTHER">Office OTHER</option>
                        <option value="OFFICE SALES">Office Sales</option>
                        <option value="PET">Pet</option>
                        <option value="PET TRAVEL">Pet Travel</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex justify-content-center mt-2 mb-2 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="btn-group" role="group">
                        <CSVLink
                          className="btn btn_csv"
                          data={listings}
                          filename={"inventory.csv"}
                        >
                          <i className="fas fa-file-csv fa-2x pe-2"></i>
                          <i class="fas fa-download fa-sm"></i>
                        </CSVLink>
                        <button className="btn btn_pdf" onClick={exportPDF}>
                          <i className="fas fa-file-pdf fa-2x me-1"></i>
                          <i class="fas fa-download fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="inventory_box">
                <table className="table table-striped table-responsive">
                  <thead className="bg_inventory_thead">
                    <tr className="text-light">
                      <th scope="col" className="uppercase text-center">
                        CATEGORY
                      </th>
                      <th scope="col" className="uppercase text-center">
                        ITEM
                      </th>
                      <th scope="col" className="uppercase text-center">
                        QTY
                      </th>
                      <th scope="col" className="uppercase text-center">
                        UPDATED
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows()}</tbody>
                </table>
                <div className="d-flex justify-content-center mb-3">
                  <Pagination
                    itemsPerPage={12}
                    count={count}
                    visitPage={visitPage}
                    previous={previous_number}
                    next={next_number}
                    active={active}
                    setActive={setActive}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );}
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Inventory);
