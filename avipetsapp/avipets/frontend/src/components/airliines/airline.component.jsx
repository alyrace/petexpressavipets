import React, { Component } from "react";
import defaultimg from "../../images/cat.png";

class AirlineCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-60 border-dark">
              <img
                src={defaultimg}
                className="card-img-top"
                alt="airmline image"
              />
              <div className="card-header card-img-overlay">
                <h5 className="card-title text-center">Cat Airlines</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AirlineCard;
