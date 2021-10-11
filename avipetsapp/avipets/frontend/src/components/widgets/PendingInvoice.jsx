import React, {invoices} from "react"

const PendingInvoice = () => {
    return (
      <div className="widget pending_widget">
        <div className="icono">
          <i className="fas fa-clock"></i>
        </div>
        <div className="widget-text">
          <h2>Pending</h2>
          <p>Invoices: {pendingInvoices}</p>
        </div>
      </div>
    );
}

export default PendingInvoice;
