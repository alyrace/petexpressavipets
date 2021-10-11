import React from "react";
import { Link } from "react-router-dom";

const ComplianceWidget = ({destination,title, icon, style_widget}) => {
    return (
      <Link to={destination}>
        <div className="widget" id={style_widget}>
          <div>{icon}</div>
          <div className="widget_text ms-2">
            <h2>{title}</h2>
          </div>
        </div>
      </Link>
    );
}

export default ComplianceWidget;
