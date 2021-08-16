import React, {useState}from "react";
import {connect} from "react-redux";

import "./barker.scss";
const Channels = () => {
    const [channelModal, setChannelModal] = useState(false);

    const openChannelModal = () => {
        setChannelModal(true)
    }
    return (
      <div>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
        >
          Channels
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
                Add
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Channels;
