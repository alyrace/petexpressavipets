import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



//import defaultimg from "../../images/cat.png";

const AirlineCard = (props) => {
    return (
      <div className="container border-dark box_airlines mt-3 mb-3">
        <div className="row">
          <Link to={`/airline/${props.slug}`}>
            <img
              src={props.photo_main}
              className="img-fluid img-center w-100 airline_img rounded"
              alt="airline image"
            />
            <h5 className="invisible card-title text-center text-dark">
              {props.title}
            </h5>
          </Link>
        </div>
      </div>
    );
};

AirlineCard.propTypes = {
    title: PropTypes.string.isRequired,
    main_photo: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
};

export default AirlineCard;
