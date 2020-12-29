import React, { Component } from "react";
import Chart from "react-google-charts";
import BarChartComponent from "./barChart";
import UserLogTables from "./userLogTables";
import { PieChart } from "react-minimal-pie-chart";

class UserActivityModal extends Component {
  state = {};
  Refs = {
    allowedValueRange: React.createRef(),
  };
  render() {
    if (this.props.userDetails === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <div className="col-lg-12 col-md-12 col-12">
          <h1>User Activity of {this.props.userDetails.userid}</h1>
          <div className="row">
            <div className="col-lg-6  col-12">
              <hr />
              <h4>Disk Usage</h4>

              <PieChart
                data={[
                  {
                    value: this.props.userDetails["Used Space"],
                    color: "#E38627",
                  },
                  {
                    value:
                      this.props.userDetails["Allowed Space"] -
                      this.props.userDetails["Used Space"],
                    color: "#ECECEC",
                  },
                ]}
                totalValue={this.props.userDetails["Allowed Space"]}
                lineWidth={20}
                label={
                  ({ dataEntry }) => dataEntry.value + "Mb"
                  // `MB / ${(
                  //   dataEntry.value / this.props.userDetails["Allowed Space"]
                  // ).toFixed(2)}%`
                }
                labelStyle={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                  fill: "#E38627",
                }}
                labelPosition={70}
                radius={40}
                style={{ height: 260 }}
              />
            </div>
            <div className="col-lg-6  col-12">
              <hr />
              <div class="form-group m-5">
                <label>Allowed Space for {this.props.userDetails.userid}</label>
                <hr />
                <label style={{ float: "left" }}>10MB</label>
                <label style={{ float: "right" }}>1GB</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  min={10}
                  max={1024}
                  defaultValue={this.props.userDetails["Allowed Space"]}
                  onChange={() =>
                    this.props.updateAllowedSpace(
                      this.Refs.allowedValueRange.current.value,
                      this.props.userDetails.userid
                    )
                  }
                  ref={this.Refs.allowedValueRange}
                />
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={this.props.userDetails["Allowed Space"] + " MB"}
                  />
                  <div class="input-group-append">
                    <label
                      class="input-group-text"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.submitAllowedSpace(
                          this.props.userDetails.userid
                        )
                      }
                    >
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-lg-6 col-12">
              <UserLogTables />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserActivityModal;
