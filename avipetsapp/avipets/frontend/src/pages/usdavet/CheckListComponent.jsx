import React from 'react'

const CheckListComponent = () => {
    return (
      <div className="row">
        <div className="container task_container pb-5">
          <div id="form_wrapper">
            <form id="form">
              <div className="row d-flex justify-content-center">
                <div className="col-6 mt-5">
                  <div className="input-group-lg form-container">
                    <input
                      id="title"
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="Add task"
                    />
                  </div>
                </div>
                <div className="col-2 mt-5 d-flex align-content-center">
                  <button id="submit" className="btn " type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div id="list_wrapper"></div>
        </div>
      </div>
    );
}

export default CheckListComponent;
