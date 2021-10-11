import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
const CompResourcesDetail = ({ isAuthenticated, match }) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [item, setItem] = useState("");

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
      window.scrollTo(0, 0);
      const id = match.params.id;

      axios
        .get(`${process.env.REACT_APP_API_URL}/api/compliance/${id}/`)
        .then((res) => {
          //setIsLoaded(true);
          setItem(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          //setIsLoaded(true);
          //setError(error);
        });
    }, [match.params.id]);

    const history = useHistory();

    const deleteItem = async (id) => {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/compliance/${id}/`
      );
      history.push("/complianceresources");
    };
    
    return (
      <div className="container">
        <main>
          <Helmet>
            <title>AVI PETS - Inventory Detail</title>
            <meta name="description" content="AVI Pets Item Detail" />
          </Helmet>
        </main>
        <section className="h-100">
          <div className="row mt-4">
            <div className="col d-flex justify-content-center">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/complianceresources">Compliance Resources</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="/complianceportal">Compliance Portal</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="container">
            <div className="row mt-4 d-flex justify_content_center">
              <div className="col">
                <h1 className="text-center text-secondary">{item.name}</h1>
              </div>
            </div>
            <div className="row mt-4 d-flex justify_content_center">
              <div className="col">
                <h6 className="text-center text-secondary">
                  <span className="fw-bold me-2">Created at:</span>
                  {item.created_at}
                </h6>
              </div>
            </div>
            <div className="row mt-4 d-flex justify_content_center">
              <div className="col">
                <h6 className="text-center text-secondary">
                  <span className="fw-bold me-2">Updated at:</span>
                  {item.last_updated}
                </h6>
              </div>
            </div>
            <div className="row mt-4 mb-5 d-flex justify_content_center">
              <div className="col">
                <h6 className="text-center text-secondary">
                  <span className="fw-bold me-2">Description:</span>
                  {item.description}
                </h6>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col">
              {item.doc && (
                <>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={item.doc}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(CompResourcesDetail);
