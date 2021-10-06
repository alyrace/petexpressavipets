import React, {useState} from 'react'


const InvoiceItem = ({
    vat_amount,
    setVat,
    net_amount,
    setNet,
    gross_amount,
    setGross,
    discount,
    setDiscount,
    service,
    setService,
    quantity,
    setQuantity,
    vat_rate,
    setVatRate,
    item_net_amount,
    setItemNetAmount,
    unit_price,
    setUnitPrice,
    discount_amount,
    setDiscountAmount,   
}) => {
        
        const sumCalc = () => {
          return (item_net_amount = quantity * unit_price);
        };
        
    
    return (
      <div className="row mt-2">
        <hr className="bg-light" />
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <label className="text-light" htmlFor="service">
            Service
          </label>
          <select
            className="form-select"
            id="service"
            value={service}
            aria-label="Service select"
            onChange={(e) => setService(e.target.value)}
          >
            <option name="All">SELECT SERVICE</option>
            <option name="service">PURCHASE CRATE</option>
            <option name="service">SHIP CRATE</option>
            <option name="service">CRATE PICK UP</option>
            <option name="service">CRATE DELIVERY</option>
            <option name="service">PET AIRFARE</option>
            <option name="service">PET COMFORT STOP</option>
            <option name="service">PET DELIVERY</option>
            <option name="service">PET BATH/GROOMING</option>
            <option name="service">PET EMERGENCY SERVICE</option>
            <option name="service">PET VETERINARY SERVICE</option>
            <option name="service">PET BOARDING</option>
            <option name="service">PET PICK UP</option>
            <option name="service">OTHER</option>
          </select>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <label className="text-light" htmlFor="quanity">
            Quantity
          </label>
          <input
            className="form-control"
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <label className="text-light" htmlFor="unit_price">
            Price
          </label>
          <input
            className="form-control"
            type="number"
            id="unit_price"
            name="unit_price"
            value={unit_price}
            onChange={(e) => setUnitPrice(+e.target.value)}
          />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <label className="text-light" htmlFor="item_net_amount">
            Total
          </label>
          <input
            className="form-control"
            type="number"
            id="item_net_amount"
            name="item_net_amout"
            value={sumCalc()}
            onChange={(e) => setItemNetAmount(e.target.value)}
          />
        </div>
      </div>
    );
}

export default InvoiceItem
