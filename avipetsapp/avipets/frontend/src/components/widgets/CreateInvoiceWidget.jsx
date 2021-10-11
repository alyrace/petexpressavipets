import React from "react";
import { Link } from "react-router-dom";

const CreateInvoiceWidget = ({invoices}) => {
    return (
      <Link to="/invoiceadd">
        <div className="widget create_invoice_widget">
          <div>
            <i className="fas fa-plus-circle"></i>
          </div>
          <div className="widget_text ms-2">
            <h2>Create</h2>
            <p>Total Invoices: {invoices && invoices.length}</p>
          </div>
        </div>
      </Link>
    );
}

export default CreateInvoiceWidget
