import React from 'react'

export const navbaralt = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="offcanvasExample"
            >
              <span
                className="navbar-toggler-icon"
                data-bs-target="#sidebar"
              ></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logoimg" />
            </a>
            <button
              className="navbar-toggler text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavBar"
              aria-controls="topNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bandcamp fa-lg" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="topNavBar">
              <form className="d-flex ms-auto my-3 my-lg-0">
                <div className="input-group ms-5 me-5">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-danger" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-2"
                    // eslint-disable-next-line
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Avatar
                      shape="square"
                      size="large"
                      aria-hidden="True"
                      icon={<UserOutlined />}
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item ms-0" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
