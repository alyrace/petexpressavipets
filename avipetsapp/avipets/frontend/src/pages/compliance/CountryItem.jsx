import React from 'react'

const CountryItem = ({title, url}) => {
    return (
      <div>
        <div className="mb-5 d-flex justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12">
          <div className="card round p-5 text-center country_card_box">
            <a href={url} className="country_title" target="_blank">
              <h4>{title}</h4>
            </a>
          </div>
        </div>
      </div>
    );
}

export default CountryItem;
