import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import PieGraph from "../../components/widgets/PieGraph";


import Pagination from "../../components/pagination/Pagination";
import InvoiceNav from "./invoicenav";
import WidgetComponent from "../../components/widgets/WidgetComponent";
import CreateInvoiceWidget from "../../components/widgets/CreateInvoiceWidget";

const Invoice = ({ isAuthenticated }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [listings, setInvoiceListings] = useState([]);
    const [search, setSearch] = useState("");
    const [searchParam] = useState(["invoice_type", "client_name"]);
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
            `${process.env.REACT_APP_API_URL}/api/invoice/?page=1`
          );
          setIsLoaded(true);
          setInvoiceListings(res.data.results);
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
      function searchInvoices(listings) {
        return listings.filter((listing) => {
          if (listing.invoice_type == filterParam) {
            return searchParam.some((newItem) => {
              return (
                listing[newItem].toString().toLowerCase().indexOf(search) > -1
              );
            });
          } else if (filterParam == "All") {
            return searchParam.some((newItem) => {
              return (
                listing[newItem].toString().toLowerCase().indexOf(search) > -1
              );
            });
          }
        });
      }

      return searchInvoices(listings).map((listing) => {
        return (
          <Link className="link-primary" to={`/invoicedetail/${listing.id}/`}>
            <div key={listing.id} className="row ivt_row mb-5 full_between">
              <div className="col text-secondary text-center">
                <Link
                  className="link-primary"
                  to={`/invoicedetail/${listing.id}/`}
                >
                  {listing.client_name}
                </Link>
              </div>
              <div className="col text-center text-secondary">
                {listing.invoice_date}
              </div>
              <div className="col text-center">{listing.total}</div>
              {listing.paid ? (
                <div className="text-center text-secondary">
                  <i className="fas fa-check-square"></i>
                </div>
              ) : (
                <div className="text-center text-danger">
                  <i className="fas fa-times-circle"></i>
                </div>
              )}
              <div className=" col text-center text-secondary">
                {listing.invoice_type}
              </div>
              <div className="col text-center text-secondary">
                <span></span>
              </div>
            </div>
          </Link>
        );
      });
    };
    const visitPage = (page) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/invoice/?page=${page}`)
        .then((res) => {
          setIsLoaded(true);
          setInvoiceListings(res.data.results);
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
        setInvoiceListings(res.data.results);
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
        setInvoiceListings(res.data.results);
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
            <title>AVI PETS - Invoice Generator</title>
            <meta name="description" content="AVI Pets Invoice Generator" />
          </Helmet>
        </main>
        <div className="container-fluid table_bg">
          <section className="row d-flex">
            <div className="col-xxl-3 col-xl-3 col-lg-3">
              <InvoiceNav />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="row d-flex justify-content-start mt-2">
                <div className="col bg-light">
                  <h3 className="text-secondary">Invoice Dashboard</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-1">
                  <CreateInvoiceWidget invoices={listings && listings.length} />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <WidgetComponent
                    widgetName="fulfilled_invoice_widget"
                    widgetTitle="Fulfilled"
                    widgetText="Invoices"
                    widgetProp={listings && listings.paid === "true"}
                    icon={<i className="fas fa-check-circle"></i>}
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-1">
                  <WidgetComponent
                    widgetName="pending_invoice_widget"
                    widgetTitle="Pending"
                    widgetText="Invoices"
                    widgetProp={listings && listings.paid === false}
                    icon={<i className="fas fa-clock"></i>}
                  />
                </div>
              </div>
              <div className="row full_center mt-3 mb-3 bg-light pt-2 pb-2">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    name="set_search"
                    id="set_search"
                    placeholder="Search Invoices By Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="mt-2 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <select
                    // here we create a basic select input we set the value to the
                    //selected value and update the setC() state every time onChange is
                    //called
                    className="form-select form-select-lg"
                    id="invoice_type"
                    onChange={(e) => {
                      setFilterParam(e.target.value);
                    }}
                    aria-label="Filter Invoices"
                  >
                    <option value="All">All Categories</option>
                    <option value="RECIEPT">Reciept</option>
                    <option value="PROFORMA INVOICE">Profoma Invoice</option>
                    <option value="INVOICE">Invoice</option>
                    <option value="CREDIT">Credit</option>
                    <option value="QUOTE">Quote</option>
                  </select>
                </div>
              </div>
              <div className="row half_center w-100 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-xxl-9 col-xl-9 col-lg- col-m-12 col-sm-12 col-xs-12">
                  <div className="table_box p-1 w-100">
                    <div className="row mb-0">
                      <div className="col d-flex justify-content-start">
                        <h2 className="text-secondary fw-bolder">
                          Recent Invoices
                        </h2>
                      </div>
                      <div className="col d-flex justify-content-end">
                        <h5 className="fw-bold">
                          <a href="/invoicelist" className="link-success">
                            View PDF List 
                            <i className="far fa-arrow-alt-circle-right ms-1 "></i>
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="custom_table">
                      <div className="mb-2">
                        <div className="text-secondary row full_between bg-light shadow p-3 mb-5 bg-body rounded">
                          <div className="col text-center">CLIENT</div>
                          <div className="col text-center">DATE</div>
                          <div className="col text-center">TOTAL</div>
                          <div className="col text-center">PAID</div>
                          <div className="col text-center">TYPE</div>
                          <div className="col text-center">
                            <i className="fas fa-ellipsis-v"></i>
                          </div>
                        </div>
                      </div>
                      <div className="table_body">{renderTableRows()}</div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-m-12 col-sm-12 col-xs-12">
                  chart {/* <PieGraph /> */}
                </div>
              </div>
              <div className="row">
                <div className="col half_center mb-3">
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
          </section>
        </div>
      </div>
    );};
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Invoice);
