import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import Pagination from "../../components/pagination/Pagination";

import "./employees.scss";

const Employees = ({ isAuthenticated }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [searchParam] = useState(["department_type", "role_title", "fullname", "office"]);
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
            `${process.env.REACT_APP_API_URL}/api/employees/?page=1`
          );
          setIsLoaded(true);
          setEmployees(res.data.results);
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
      function searchEmployees(employees) {
        return employees.filter((employee) => {
          if (employee.department_type == filterParam) {
            return searchParam.some((newItem) => {
              return (
                employee[newItem].toString().toLowerCase().indexOf(search) > -1
              );
            });
            
          } else if (filterParam == "All") {
            return searchParam.some((newItem) => {
              return (
                employee[newItem].toString().toLowerCase().indexOf(search) > -1
              );
            });
          }
        });
      }

      return searchEmployees(employees).map((employee) => {
        return (
          <Link to={`/employeeprofile/${employee.id}/`}>
            <div key={employee.id} className="row emp_row mb-5 full_between">
              <div className="col emp_office full_center text-center fw-bold">
                <span>{employee.office}</span>
              </div>
              <div className="col full_center text-center">
                <Link
                  className="emp_link"
                  to={`/employeeprofile/${employee.id}/`}
                >
                  {employee.fullname}
                </Link>
              </div>
              <div className="col full_center text-center">
                <span className="link-secondary fw-bolder">{employee.department_type}</span>
              </div>
              <div className="col ivt_cat full_center text-center fw-bold">
                <span>{employee.role_title}</span>
              </div>
            </div>
          </Link>
        );
      });
    };

    const visitPage = (page) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/employees/?page=${page}`)
        .then((res) => {
          setIsLoaded(true);
          setEmployeess(res.data.results);
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
          setEmployees(res.data.results);
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
          setEmployees(res.data.results);
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

      const title = "Pet Express Employees";
      const headers = [["OFFICE", "USER", "DEPARTMENT", "ROLE"]];

      const data = employees.map((employee) => [
        employee.office,
        employee.fullname,
        employee.department_type,
        employee.role_title,
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
            <title>AVI PETS - Employee</title>
            <meta name="description" content="AVI Pets Employee" />
          </Helmet>
        </main>
        <div className="container-fluid table_bg">
          <section>
            <div className="row mb-5">
              <div className="half_center mt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/dashboard">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="text-center text-secondary font-weight-bold-display-4">
                  Pet Express Employees
                </h2>
              </div>
              <div className="half_center mt-3 mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="container p-4 employee_box_search">
                    <div className="row">
                      <div className="half_center mt-2 mb-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          type="text"
                          name="set_search"
                          id="set_search"
                          placeholder="Search Employees"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <div className="half_center mb-2 mt-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <select
                          className="form-select form-select-lg"
                          id="department_types"
                          onChange={(e) => {
                            setFilterParam(e.target.value);
                          }}
                          aria-label="Filter Departments"
                        >
                          <option value="All">ALL DEPARTMENTS</option>
                          <option value="ACCOUNTING">Accounting</option>
                          <option value="COMPLIANCE">Compliance</option>
                          <option value="CONTRACTOR">Contractor</option>
                          <option value="HUMAN RESOURCES">
                            Human Resources
                          </option>
                          <option value="MANAGEMENT">Management</option>
                          <option value="OPERATIONS">Operations</option>
                          <option value="PETCARE">Pet care</option>
                          <option value="SALES">Sales</option>
                          <option value="SECURITY">Security</option>
                          <option value="SITEADMIN">Site Admin</option>
                          <option value="VET">Vet</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="half_center mt-2 mb-2 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="btn-group" role="group">
                          <CSVLink
                            className="btn btn_csv2"
                            data={employees}
                            filename={"inventory.csv"}
                          >
                            <i className="fas fa-file-csv fa-2x pe-2"></i>
                            <i className="fas fa-download fa-sm"></i>
                          </CSVLink>
                          <button className="btn btn_pdf2" onClick={exportPDF}>
                            <i className="fas fa-file-pdf fa-2x me-1"></i>
                            <i className="fas fa-download fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3 half_center w-100 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="table_box p-1 w-100">
                  <div className="custom_table">
                    <div className="mb-2">
                      <div className="text-secondary row full_between bg-light shadow p-3 mb-5 bg-body rounded">
                        <div className="col text-center fw-bold">OFFICE</div>
                        <div className="col text-center fw-bold">USER</div>
                        <div className="col text-center fw-bold">DPT.</div>
                        <div className="col text-center fw-bold">TITLE</div>
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
        </div>
      </div>
    );}
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Employees);



