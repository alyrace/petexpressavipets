import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import Pagination from "../../components/pagination/Pagination";
import { map } from "lodash";

const LeadDashBoard = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["category", "travel_type"]);
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
          `${process.env.REACT_APP_API_URL}/api/sales/?page=1`
        );
        setIsLoaded(true);
        setLeads(res.data.results);
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
    function searchInventory(leads) {
      return leads.filter((lead) => {
        if (lead.category == filterParam) {
          return searchParam.some((newItem) => {
            return (
              lead[newItem].toString().toLowerCase().indexOf(search) > -1
            );
          });
        } else if (filterParam == "All") {
          return searchParam.some((newItem) => {
            return (
              lead[newItem].toString().toLowerCase().indexOf(search) > -1
            );
          });
        }
      });
    }

    return searchInventory(leads)?.map((lead) => {
      return (
        <Link to={`/salesportal/salesleaddetail/${lead.id}/`}>
          <div key={lead.id} className="row ivt_row mb-5 full_between">
            <div className="col ivt_date full_center text-center">
              <span>{lead.category}</span>
            </div>
            <div className="col full_center text-center text-secondary">
              {lead.first_name}
            </div>
            <div className="col full_center text-secondary text-center">
              {lead.last_name}
            </div>
            {lead.agent ? (
              <div className="col full_center text-center me-2">
                <span className="fw-bolder text-secondary">{lead.agent}</span>
              </div>
            ) : (
              <div className="col full_center text-center me-2">
                <span className="fw-bolder text-danger">Unassigned</span>
              </div>
            )}
            <div className="col ivt_cat full_center text-center me-2">
              <span className="fw-bolder">{lead.travel_type}</span>
            </div>
          </div>
        </Link>
      );
    });
  };
  const visitPage = (page) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/sales/?page=${page}`)
      .then((res) => {
        setIsLoaded(true);
        setLeads(res.data.results);
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
        setLeads(res.data.results);
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
        setLeads(res.data.results);
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

    const title = "Pet Express Sales Leads";
    const headers = [["CATEGORY", "FIRST", "LAST", "EMAIL", "PHONE", "AGENT", "TYPE", "UPDATED"]];

    const data = leads?.map((lead) => [
      lead.category,
      lead.first_name,
      lead.last_name,
      lead.email,
      lead.phone_number,
      lead.agent,
      lead.travel_type,
      lead.last_updated
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("leadreport.pdf");
  };
  if (error) {
          return <>{error.message}</>;
    } else if (!isLoaded) {
          return <>loading...</>;
  } else {
  return (
    <div className="container-fluid">
      <main>
        <Helmet>
          <title>AVI PETS - Sales Lead Dashboard</title>
          <meta name="description" content="AVI Pets Sales Lead Dashboard" />
        </Helmet>
      </main>
      <section>
        <div className="row mb-5">
          <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center text-secondary font-weight-bold-display-4">
              Pet Express Sales Lead Manager
            </h2>
          </div>
          <div className="half_center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="container p-4 inventory_box_search">
                <div className="row">
                  <div className="half_center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                      <div className="container-fluid">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-2">
                          <button type="button" className="ivt_btn2_outline">
                            <Link
                              to="/salesportal/createlead"
                              className="full_center link-light"
                            >
                              <i className="fas fa-plus-square fa-2x ivt_btn2 me-2"></i>
                              Add Lead
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="half_center mt-2 mb-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      name="set_search"
                      id="set_search"
                      placeholder="Search Leads By Travel Type"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="half_center mb-2 mt-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <select
                      className="form-select form-select-lg"
                      id="category"
                      onChange={(e) => {
                        setFilterParam(e.target.value);
                      }}
                      aria-label="Filter Category"
                    >
                      <option value="All">ALL CATEGORIES</option>
                      <option value="CALLED">Called</option>
                      <option value="EMAILED">Emailed</option>
                      <option value="PENDING OUTREACH">Pending Outreach</option>
                      <option value="PENDING ASSIGNMENT">
                        Pending Assignment
                      </option>
                      <option value="PENDING CONTACT">Pending Contact</option>
                      <option value="AGENT ASSIGNED">Agent ASSIGNED</option>
                      <option value="CONTACT SUCCESS">Contact Success</option>
                      <option value="CONTACT FAIL">Contact Fail</option>
                      <option value="COMPLETE">Complete</option>
                      <option value="PENDING">Pending</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="half_center mt-2 mb-2 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="btn-group" role="group">
                      <CSVLink
                        className="btn btn_csv"
                        data={leads}
                        filename={"leads.csv"}
                      >
                        <i className="fas fa-file-csv fa-2x pe-2"></i>
                        <i className="fas fa-download fa-sm"></i>
                      </CSVLink>
                      <button className="btn btn_pdf1" onClick={exportPDF}>
                        <i className="fas fa-file-pdf fa-2x me-1"></i>
                        <i className="fas fa-download fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 half_center w-100 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="table_box p-1 w-100">
              <div className="custom_table">
                <div className="mb-2">
                  <div className="text-secondary row full_between bg-light shadow p-3 mb-5 bg-body rounded">
                    <div className="col text-center fw-bold">CATEGORY</div>
                    <div className="col text-center fw-bold">FIRST</div>
                    <div className="col text-center fw-bold">LAST</div>
                    <div className="col text-center fw-bold">AGENT</div>
                    <div className="col text-center fw-bold">TRAVEL</div>
                  </div>
                </div>
                <div className="table_body">{renderTableRows()}</div>
              </div>
              <div className="half_center mb-3">
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
      <section>
        
      </section>
    </div>
  );};
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LeadDashBoard);
