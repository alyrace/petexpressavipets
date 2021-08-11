import React from "react";
import PropTypes from "prop-types";
import "../../sass/pagination.scss"

const pagination = (props) => {
  const getNumbers = () => {
    let numbers = [];
    let itemsPerPage = props.itemsPerPage;
    let pageNumber = 1;

    for (let i = 0; i < props.count; i += itemsPerPage) {
      const page = pageNumber;
      let style = "pagination__number";
      let content = null;

      if (props.active === page) {
        content = (
          <div
            key={i}
            className="pagination__number pagination__number--active"
          >
            {pageNumber}
          </div>
        );
      } else {
        content = (
          <div
            key={i}
            onClick={() => props.visitPage(page)}
            className="pagination__number pagination__number--active"
          >
            {pageNumber}
          </div>
        );
      }

      numbers.push(content);
      pageNumber++;
    }

    return numbers;
  };

  return (
    <div className="pagination">
      <div onClick={() => props.previous()} className="pagination__number">
        <i class="fa fa-angle-double-left fa-lg" aria-hidden="true"></i>
      </div>
      {getNumbers()}
      <div onClick={() => props.next()} className="pagination__number">
        <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i>
      </div>
    </div>
  );
};

pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  visitPage: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default pagination;
