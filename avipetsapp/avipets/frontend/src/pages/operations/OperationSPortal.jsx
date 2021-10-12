import React, { Component } from "react";
import ComplianceWidget from "../../components/widgets/ComplianceWidget";

import ops from "../../images/ops.png";

class OperationsPortal extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid banner_ops">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="text-white text-center mt-3 pt-2">
                Operations Portal
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
                All access info to all operation related for your pet travel
                needs.
              </h2>
            </div>
            <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img className="img-fluid text-center" src={ops} alt="airline" />
            </div>
          </div>
        </section>
        <section className="mt-2">
          <div className="row d-flex justify_content_around">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Pet Hotel"
                destination="/pethotel"
                style_widget="usda_usda_widget"
                icon={<i className="fas fa-paw"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Resources"
                destination="/opsresources"
                style_widget="usda_country_widget"
                icon={<i className="fab fa-sourcetree"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Call List"
                destination="/opscalllist"
                style_widget="usda_res_widget"
                icon={<i className="fas fa-phone-alt"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Inventory"
                destination="/inventory"
                style_widget="usda_vet_widget"
                icon={<i className="fas fa-boxes"></i>}
              />
            </div>
          </div>
          <div className="row d-flex justify_content_around">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="USDA-Ops"
                destination="/opsusdachecklist"
                style_widget="usda_usda_widget"
                icon={<i className="fas fa-university"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="USDA-Driver"
                destination="/driverusdachecklist"
                style_widget="usda_country_widget"
                icon={<i className="fas fa-university"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Vet-Ops"
                destination="/opsvetchecklist"
                style_widget="usda_res_widget"
                icon={<i className="fas fa-user-md"></i>}
              />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ComplianceWidget
                title="Vet-Driver"
                destination="/drivervetchecklist"
                style_widget="usda_vet_widget"
                icon={<i className="fas fa-user-md"></i>}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default OperationsPortal;
