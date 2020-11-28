import React, { Component } from "react";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className=" d-flex justify-content-center">
        <div className="card text-white bg-success col-3 m-2">
          <div className="card-header">Count of Photos</div>
          <div className="card-body">
            <h1 className="card-title">45</h1>
            <p className="card-text">Count of Photos</p>
          </div>
        </div>
        <div className="card text-white bg-danger col-3 m-2">
          <div className="card-header">Count of Users</div>
          <div classNa me="card-body">
            <h1 className="card-title">3</h1>
            <p className="card-text">Total No of Users</p>
          </div>
        </div>
        <div className="card text-white bg-info col-3 m-2">
          <div className="card-header">Disk space</div>
          <div className="card-body">
            <h1 className="card-title">200Mb</h1>
            <p className="card-text">Total Disk Usage</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
