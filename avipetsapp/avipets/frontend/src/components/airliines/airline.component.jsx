import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import defaultimg from "../../images/cat.png";

const AirlineCard = (props) => {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <Link to={`/airlineportal/${props.slug}`}>
              <figure class="figure">
                <img
                  src={props.photo_main}
                  class="figure-img img-fluid rounded"
                  alt="airlineimage"
                />
                <figcaption class="figure-caption">
                  {props.title}
                </figcaption>
              </figure>
            </Link>
          </div>
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
