import React from 'react'
import '../navigation/navbar.scss'
const Minibar = () => {
    return (
      <div>
        <div
          className="bg-transparent btn-group center w-60 bg-light d-flex flex-wrap justify-content-center align-content-center"
          role="group"
          aria-label="mini nav"
        >
          <a href="/dashboard" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-th fa-lg"></i>
            </button>
          </a>
          <a href="/airlineportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-plane fa-lg"></i>
            </button>
          </a>
          <a href="/driversportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-truck-moving fa-lg"></i>
            </button>
          </a>
          <a href="/complianceportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-passport fa-lg"></i>
            </button>
          </a>
          <a href="/operationsportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-store-alt fa-lg"></i>
            </button>
          </a>
          <a href="petportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-paw fa-lg"></i>
            </button>
          </a>
          <a href="/salesportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-mobile-alt fa-lg"></i>
            </button>
          </a>
          <a href="/tsaportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-user-shield fa-lg"></i>
            </button>
          </a>
          <a href="/usdavetportal" className="link-secondary">
            <button type="button" class="btn btn-outline-dark mini_btn p-2">
              <i className="fas fa-landmark fa-lg"></i>
            </button>
          </a>
        </div>
      </div>
    );
}

export default Minibar;
