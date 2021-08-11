import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";

import Pagination from "../../components/pagination/pagination";



//import Navbar from "../../components/navigation/navbar.component";
//import InventoryTable from "../../components/inventorytable/inventorytable.component";

import "./inventory.scss";
//import AddItems from "./additems";

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
         <td className="text-center">{listing.id}</td>
         <td className="text-center">{listing.category}</td>
         <td className="text-center">
           <Link class="link-danger" to={`/inventoryupdate/${listing.id}`}>
             {listing.item_name}
           </Link>
         </td>
         <td className="text-center">{listing.quantity}</td>
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
                <div className="container">
                  <div className="d-flex justify-content-center mt-2 mb-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <input
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
                      class="form-select"
                      id="category"
                      onChange={(e) => {
                        setFilterParam(e.target.value);
                      }}
                      className="custom-select"
                      aria-label="Filter Inventory"
                    >
                      <option value="All">ALL CATEGORIES</option>
                      <option value="CLEANING">CLEANING</option>
                      <option value="CRATES">CRATES</option>
                      <option value="ELECTRONICS">ELECTRONICS</option>
                      <option value="MISCELLANEOUS">MISCELLANEOUS</option>
                      <option value="OFFICE MAIN">OFFICE MAIN</option>
                      <option value="OFFICE SALES">OFFICE SALES</option>
                      <option value="PET">PET</option>
                      <option value="PET TRAVEL">PET TRAVEL</option>
                    </select>
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
                        #
                      </th>
                      <th scope="col" className="uppercase text-center">
                        CATEGORY
                      </th>
                      <th scope="col" className="uppercase text-center">
                        ITEM
                      </th>
                      <th scope="col" className="uppercase text-center">
                        QTY
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
            <div className="col"></div>
          </div>
        </section>
        <section className="container"></section>
      </div>
    </div>
  );}
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Inventory);
