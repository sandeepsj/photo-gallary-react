import axios from "axios";
import React, { Component } from "react";
import Banner from "./banner";
import UserStatistics from "./userStatistics";
class DashBoard extends Component {
  state = { myPhotosCount: 0, myDiskUsage: 0, allowedSpace: 0 };

  getMyStatus = () => {
    axios.get("/getMyStatus").then((res) => {
      console.log(res);
      this.setState({
        ...this.state,
        myDiskUsage: parseInt(res.data.used / (1024 * 1024)),
        allowedSpace: res.data.allowed,
        myPhotosCount: res.data.photosCount,
      });
    });
  };
  componentDidMount = () => {
    this.getMyStatus();
  };
  render() {
    return (
      <div className="container-fluid">
        <Banner state={this.state} />
        <hr />
        <UserStatistics />

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
