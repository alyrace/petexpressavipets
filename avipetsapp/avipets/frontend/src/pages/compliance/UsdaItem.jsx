import React from 'react'

const UsdaItem = ({title, url}) => {
    return (
      <div className="mb-5 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="card round p-5 text-center usda_card_box">
          <a href={url} className="usda_title" target="_blank">
            <h4>{title}</h4>
          </a>
        </div>
      </div>
    );
}

export default UsdaItem
