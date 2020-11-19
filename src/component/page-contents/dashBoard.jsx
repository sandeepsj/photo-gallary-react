import React, { Component } from "react";
class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div
          className="card text-white bg-success"
          style={{ maxWidth: "18rem", float: "left", margin: 10 }}
        >
          <div className="card-header">Count of Photos</div>
          <div className="card-body">
            <h1 className="card-title">45</h1>
            <p className="card-text">Count of Photos</p>
          </div>
        </div>
        <div
          className="card text-white bg-danger"
          style={{ maxWidth: "18rem", float: "left", margin: 10 }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h1 className="card-title">96 / 100Mb</h1>
            <p className="card-text">
              You Can only store upto 100Mb, 4 Mb is left out
            </p>
          </div>
        </div>
        {/* <div style={{ clear: "both" }}>
          <h1 className="mt-4">Simple Sidebar</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{" "}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{" "}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
        </div> */}
      </div>
    );
  }
}

export default DashBoard;
