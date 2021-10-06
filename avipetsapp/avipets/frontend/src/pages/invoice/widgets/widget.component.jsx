import React from "react"
import {Link} from "react-router-dom";
const WidgetComponent = ({
    widgetName, 
    widgetTitle, 
    widgetText, 
    widgetProp,
    icon,
  
  }) => {
    return (
      <div className="widget"id={widgetName}>
        <div>{icon}</div>
        <div className="ms-2">
          <h2>{widgetTitle}</h2>
          <p>{widgetText}: {widgetProp}</p>
        </div>
      </div>
    );
}

export default WidgetComponent
