import React,{useState, useEffect} from 'react'
import countryList from "./data/countryList";

import Logo from "../../images/petexpresslogo.png";
import "./invoice.scss";

const initialProductLine = {
  description: "",
  quantity: "1",
  rate: "0.00",
};

const initialInvoice = {
  title: "INVOICE",
  companyName: "Pet Express International Transport",
  name: "",
  companyAddress: "",
  companyAddress2: "",
  companyCountry: "Select Country",
  billTo: "Bill To:",
  clientName: "",
  clientAddress: "",
  clientAddress2: "",
  clientCountry: "Select Country",
  invoiceTitleLabel: "Scooby#",
  invoiceTitle: "",
  invoiceDateLabel: "Invoice Date",
  invoiceDate: "",
  invoiceDueDateLabel: "Due Date",
  invoiceDueDate: "",
  productLineDescription: "Item Description",
  productLineQuantity: "Qty",
  productLineQuantityRate: "Rate",
  productLineQuantityAmount: "Amount",
  productLines: [
    {
      description: "N100 Crate",
      quantity: "2",
      rate: "100.00",
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: "Sub Total",
  taxLabel: "Sale Tax (10%)",
  totalLabel: "TOTAL",
  currency: "$",
  notesLabel: "Notes",
  notes: "It was great doing business with you.",
  termLabel: "Terms & Conditions",
  term: "Please make the payment by the due date.",
};

const EditableInput = ({ className, placeholder, value, onChange }) => (
  <input
    type="text"
    className={"input " + (className ? className : "")}
    placeholder={placeholder || ""}
    value={value || ""}
    onChange={onChange ? (e) => onChange(e.target.value) : undefined}
  />
);

const EditableTextarea = ({
  className,
  placeholder,
  value,
  onChange,
  rows,
}) => (
  <textarea
    minRows={rows || 1}
    className={"input " + (className ? className : "")}
    placeholder={placeholder || ""}
    value={value || ""}
    onChange={onChange ? (e) => onChange(e.target.value) : undefined}
  />
);

const EditableSelect = ({
  className,
  options,
  placeholder,
  value,
  onChange,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <React.Fragment>
      {isEditing ? (
        <select
          className={"select " + (className ? className : "")}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          onBlur={() => setIsEditing(false)}
          autoFocus={true}
        >
          {options?.map((option) => (
            <option key={option.text} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ) : (
        <input
          readOnly={true}
          type="text"
          className={"input " + (className ? className : "")}
          value={value || ""}
          placeholder={placeholder || ""}
          onFocus={() => setIsEditing(true)}
        />
      )}
    </React.Fragment>
  );
};


const InvoicePage = () => {
    const [invoice, setInvoice] = useState({ ...initialInvoice });
    const [subTotal, setSubTotal] = useState();
    const [saleTax, setSaleTax] = useState();

    const handleChange = (name, value) => {
      if (name !== "productLines") {
        const newInvoice = { ...invoice };
        newInvoice[name] = value;

        setInvoice(newInvoice);
      }
    };

    const handleProductLineChange = (index, name, value) => {
      const productLines = invoice.productLines.map((productLine, i) => {
        if (i === index) {
          const newProductLine = { ...productLine };

          if (name === "description") {
            newProductLine[name] = value;
          } else {
            if (
              value[value.length - 1] === "." ||
              (value[value.length - 1] === "0" && value.includes("."))
            ) {
              newProductLine[name] = value;
            } else {
              const n = parseFloat(value);

              newProductLine[name] = (n ? n : 0).toString();
            }
          }

          return newProductLine;
        }

        return { ...productLine };
      });

      setInvoice({ ...invoice, productLines });
    };

    const handleRemove = (i) => {
      const productLines = invoice.productLines.filter(
        (productLine, index) => index !== i
      );

      setInvoice({ ...invoice, productLines });
    };

    const handleAdd = () => {
      const productLines = [...invoice.productLines, { ...initialProductLine }];

      setInvoice({ ...invoice, productLines });
    };

    const calculateAmount = (quantity, rate) => {
      const quantityNumber = parseFloat(quantity);
      const rateNumber = parseFloat(rate);
      const amount =
        quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

      return amount.toFixed(2);
    };

    useEffect(() => {
      let subTotal = 0;

      invoice.productLines.forEach((productLine) => {
        const quantityNumber = parseFloat(productLine.quantity);
        const rateNumber = parseFloat(productLine.rate);
        const amount =
          quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

        subTotal += amount;
      });

      setSubTotal(subTotal);
    }, [invoice.productLines]);

    useEffect(() => {
      const match = invoice.taxLabel.match(/(\d+)%/);
      const taxRate = match ? parseFloat(match[1]) : 0;
      const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0;

      setSaleTax(saleTax);
    }, [subTotal, invoice.taxLabel]);
    return (
      <div className="container">
        <div className="row d-flex justify-content-between mt-5">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-xl col-xs-12">
            <div className="container d-flex justify-content-center">
              <img src={Logo} alt="px logo" />
            </div>
            <EditableInput
              className=" w-100 fw-bold h2 text-center pdfinput mt-2"
              placeholder="Invoice"
              value={invoice.title}
              onChange={(value) => handleChange("title", value)}
            />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <EditableInput
              className="w-100 fw-bold"
              placeholder="Your Company"
              value={invoice.companyName}
              onChange={(value) => handleChange("companyName", value)}
            />
            <EditableInput
              className="w-100"
              placeholder="Your Name"
              value={invoice.name}
              onChange={(value) => handleChange("name", value)}
            />
            <EditableInput
              className="w-100"
              placeholder="Company's Address"
              value={invoice.companyAddress}
              onChange={(value) => handleChange("companyAddress", value)}
            />
            <EditableInput
              className="w-100"
              placeholder="City, State/Province Zip"
              value={invoice.companyAddress2}
              onChange={(value) => handleChange("companyAddress2", value)}
            />
            <EditableSelect
              className="w-100"
              options={countryList}
              value={invoice.companyCountry}
              onChange={(value) => handleChange("companyCountry", value)}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-between mt-4">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <EditableInput
              className="fw-bold mb-2"
              value={invoice.billTo}
              onChange={(value) => handleChange("billTo", value)}
            />
            <EditableInput
              placeholder="Your Client's Name"
              value={invoice.clientName}
              onChange={(value) => handleChange("clientName", value)}
            />
            <EditableInput
              placeholder="Client's Address"
              value={invoice.clientAddress}
              onChange={(value) => handleChange("clientAddress", value)}
            />
            <EditableInput
              placeholder="City, State/Province, Zipcode"
              value={invoice.clientAddress2}
              onChange={(value) => handleChange("clientAddress2", value)}
            />
            <EditableSelect
              options={countryList}
              value={invoice.clientCountry}
              onChange={(value) => handleChange("clientCountry", value)}
            />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="">
              <div className="w-100">
                <EditableInput
                  className="fw-bold"
                  value={invoice.invoiceTitleLabel}
                  onChange={(value) => handleChange("invoiceTitleLabel", value)}
                />
              </div>
              <div className="w-100">
                <EditableInput
                  placeholder="Enter Scooby #"
                  value={invoice.invoiceTitle}
                  onChange={(value) => handleChange("invoiceTitle", value)}
                />
              </div>
            </div>
            <div className="flex mb-5">
              <div className="w-100">
                <EditableInput
                  className="fw-bold"
                  value={invoice.invoiceDateLabel}
                  onChange={(value) => handleChange("invoiceDateLabel", value)}
                />
              </div>
              <div className="w-100">
                <EditableInput
                  placeholder="Enter Date"
                  value={invoice.invoiceDate}
                  onChange={(value) => handleChange("invoiceDate", value)}
                />
              </div>
            </div>
            <div className="flex mb-5">
              <div className="w-100">
                <EditableInput
                  className="fw-bold"
                  value={invoice.invoiceDueDateLabel}
                  onChange={(value) =>
                    handleChange("invoiceDueDateLabel", value)
                  }
                />
              </div>
              <div className="w-100">
                <EditableInput
                  placeholder="Enter Date"
                  value={invoice.invoiceDueDate}
                  onChange={(value) => handleChange("invoiceDueDate", value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 bg_pdf d-flex">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <EditableInput
              className="text-light fw-bold bg_pdf"
              value={invoice.productLineDescription}
              onChange={(value) =>
                handleChange("productLineDescription", value)
              }
            />
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
            <EditableInput
              className="text-light fw-bold bg_pdf"
              value={invoice.productLineQuantity}
              onChange={(value) => handleChange("productLineQuantity", value)}
            />
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
            <EditableInput
              className="text-light fw-bold bg_pdf"
              value={invoice.productLineQuantityRate}
              onChange={(value) =>
                handleChange("productLineQuantityRate", value)
              }
            />
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
            <EditableInput
              className="text-light fw-bold bg_pdf"
              value={invoice.productLineQuantityAmount}
              onChange={(value) =>
                handleChange("productLineQuantityAmount", value)
              }
            />
          </div>
        </div>

        {invoice.productLines.map((productLine, i) => {
          return (
            <div key={i} className="row item_row d-flex">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <EditableTextarea
                  className="text-dark"
                  rows={2}
                  placeholder="Enter item name/description/service"
                  value={productLine.description}
                  onChange={(value) =>
                    handleProductLineChange(i, "description", value)
                  }
                />
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <EditableInput
                  className="text-ddark"
                  value={productLine.quantity}
                  onChange={(value) =>
                    handleProductLineChange(i, "quantity", value)
                  }
                />
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <EditableInput
                  className="text-dark"
                  value={productLine.rate}
                  onChange={(value) =>
                    handleProductLineChange(i, "rate", value)
                  }
                />
              </div>
              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <span className="span">
                  {calculateAmount(productLine.quantity, productLine.rate)}
                </span>
              </div>
              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <button
                  className="link-secondary row__remove"
                  aria-label="Remove Row"
                  title="Remove Row"
                  onClick={() => handleRemove(i)}
                >
                  <i class="fas fa-times-circle text-danger"></i>{" "}
                </button>
              </div>
            </div>
          );
        })}

        <div className="row d-flex justify-content-between mt-2">
          <div className="col-6 mt-1">
            <button className="link-secondary btn_pdf" onClick={handleAdd}>
              <i class="fas fa-plus-circle text-success me-1"></i>
              Add Line Item
            </button>
          </div>
          <div className="col-6 mt-1">
            <div className="row d-flex justify-content-between">
              <div className="col-3">
                <EditableInput
                  value={invoice.subTotalLabel}
                  onChange={(value) => handleChange("subTotalLabel", value)}
                />
              </div>
              <div className="col-3">
                <span className="span fw-bold text-dark">
                  {subTotal?.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-3">
                <EditableInput
                  value={invoice.taxLabel}
                  onChange={(value) => handleChange("taxLabel", value)}
                />
              </div>
              <div className="col-3">
                <span className="span fw-bold text-dark">
                  {saleTax?.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-2">
                <EditableInput
                  className="fw-bold"
                  value={invoice.totalLabel}
                  onChange={(value) => handleChange("totalLabel", value)}
                />
              </div>
              <div className="col-4">
                <div className="row d-flex jusitify-content-center">
                  <div className="col-1 w-25">
                    <EditableInput
                      className="text-dark fw-bold"
                      value={invoice.currency}
                      onChange={(value) => handleChange("currency", value)}
                    />
                  </div>
                  <div className="col-2 ms-0">
                    <span className="span fw-bold text-dark">
                      {(typeof subTotal !== "undefined" &&
                      typeof saleTax !== "undefined"
                        ? subTotal + saleTax
                        : 0
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <EditableInput
            className="fw-bold w-100"
            value={invoice.notesLabel}
            onChange={(value) => handleChange("notesLabel", value)}
          />
          <EditableTextarea
            className="w-100"
            rows={2}
            value={invoice.notes}
            onChange={(value) => handleChange("notes", value)}
          />
        </div>
        <div className="mt-2">
          <EditableInput
            className="fw-bold w-100"
            value={invoice.termLabel}
            onChange={(value) => handleChange("termLabel", value)}
          />
          <EditableTextarea
            className="w-100"
            rows={2}
            value={invoice.term}
            onChange={(value) => handleChange("term", value)}
          />
        </div>
      </div>
    );
}

export default InvoicePage;

