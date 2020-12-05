import React, { Component } from "react";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className=" d-flex justify-content-center">
        <div className="card text-white bg-success col-3 m-2">
          <div className="card-header">Count of Photos</div>
          <div className="card-body">
            <h1 className="card-title">{this.props.state.myPhotosCount}</h1>
            <p className="card-text">
              There are {this.props.state.myPhotosCount} photos stored in your
              Account
            </p>
          </div>
        </div>
        <div className="card text-white bg-danger col-3 m-2">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h1 className="card-title">
              {this.props.state.myDiskUsage}Mb / {this.props.state.allowedSpace}
              Mb
            </h1>
            <p className="card-text">
              You Can only store upto {this.props.state.allowedSpace},{" "}
              {this.props.state.allowedSpace - this.props.state.myDiskUsage} Mb
              is left out
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
