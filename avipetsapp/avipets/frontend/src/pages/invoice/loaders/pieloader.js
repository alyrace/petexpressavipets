import React from "react"
import loadSvg from "../../../images/graph.svg"

const PieLoader = () => {
    return (
        <div className="pie_loader">
          <img src={loadSvg} alt="graph loader" className="graph_img"/>  
        </div>
    )
}

export default PieLoader;
