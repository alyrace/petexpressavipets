import React, {memo} from "react";
const InvoiceNav = () => {
    return (
      <nav className="inc_nav d-flex justify-content-start flex-column">
          <a htmlFor="/invoicehome" className="inc_nav_btns inc_nav_btn1 mt-5 mb-3">
            <span>
              <i className="fas fa-th inc_dash"></i>
            </span>
            <p>Dashboard</p>
          </a>
          <a htmlFor="/invoiceadd" className="inc_nav_btns inc_nav_btn2 mb-3 ">
            <span>
              <i className="fas fa-plus-circle inc_add"></i>
            </span>
            <p>Create New</p>
          </a>

        <a htmlFor="/invoicelist" className="inc_nav_btns inc_nav_btn3 mb-3">
          <span>
            <i className="fas fa-file-invoice inc_inc"></i>
          </span>
          <p>Get PDF</p>
        </a>

          <a htmlFor="/invoicesettings" className="inc_nav_btns inc_nav_btn4">
            <span>
              <i className="fas fa-cog inc_settings"></i>
            </span>
            <p>Settings</p>
          </a>
      </nav>
    );
}

export default InvoiceNav;
