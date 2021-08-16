import React from 'react'
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Channels from './channels';

const BarkerSidebar = () => {
    return (
      <div>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#barkersidenav"
          aria-controls="barkersidenav"
        >
          Button with data-bs-target
        </button>
        <div
          className="offcanvas offcanvas-start bg-dark"
          tabindex="-1"
          id="barkersidenav"
          aria-labelledby="offcanvasbarkernav"
        >
          <div className="offcanvas-header text-light d-flex justify-content-end">
            <button
              type="button"
              className="btn text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div className="offcanvas-header mt-0 mb-0 d-flex justify-content-center">
            <h1 className="offcanvas-title text-light" id="offcanvasbarkernav">
              Barker <i class="fas fa-dog fa-1x"></i>
            </h1>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex justify-content-center  border border-light border-5 pt-1 pb-1">
              <Avatar
                className="text-light border border-light border-5 rounded"
                shape="square"
                size={64}
                icon={<UserOutlined />}
              />{" "}
              <h3 className="text-light ms-5 mt-3 fw-bold">User</h3>
            </div>
            <div className="dropdown mt-3">
              <Channels />
            </div>
          </div>
        </div>
      </div>
    );
}

export default BarkerSidebar;