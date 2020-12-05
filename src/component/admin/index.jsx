import React, { Component } from "react";
import TopNav from "./nav/topnav";
import Banner from "./content/banner";
import UserTable from "./content/userTable.jsx";
import { Redirect } from "react-router-dom";
import axios from "axios";
class AdminApp extends Component {
  state = {
    isLoggedIn: true,
    count_of_photos: 0,
    count_of_users: 0,
    total_disk_space: 0,
    userData: {
      // sandeep: {
      //   Name: "Sandeep S J",
      //   UserID: "sandeep",
      //   Email: "sandeepsj0000@gmail.com",
      //   "Phone Number": "7594018731",
      //   "Allowed Space": 512,
      //   "Used Space": 100,
      // },
      // san: {
      //   Name: "Sandeep S J",
      //   UserID: "san",
      //   Email: "ssj062@gmail.com",
      //   "Phone Number": "7594018731",
      //   "Allowed Space": 1024,
      //   "Used Space": 20,
      // },
      // sandy: {
      //   Name: "Sandeep S J",
      //   UserID: "sandy",
      //   Email: "ssj0000@gmail.com",
      //   "Phone Number": "7594018731",
      //   "Allowed Space": 20,
      //   "Used Space": 10,
      // },
    },
    selectedUser: null,
  };
  getCounts = () => {
    axios.get("/getCounts").then((res) => {
      console.log(res);
      this.setState({
        ...this.state,
        count_of_photos: res.data.count_of_photos,
        count_of_users: res.data.count_of_users,
        total_disk_space: parseInt(res.data.total_disk_space / (1024 * 1024)),
      });
    });
  };
  getAllUserData = () => {
    axios
      .get("/getAllUserData")
      .then((res) => {
        this.setState({ ...this.state, userData: res.data, isLoggedIn: true });
      })
      .catch((err) => {
        this.setState({ ...this.state, isLoggedIn: false });
      });
  };
  componentDidMount = () => {
    this.getAllUserData();
    this.getCounts();
  };
  updateAllowedSpace = (value, user) => {
    var temp = { ...this.state };
    temp.userData[user]["Allowed Space"] = value;
    this.setState(temp);
  };
  selectUser = (user) => {
    this.setState({ ...this.state, selectedUser: user });
  };
  logout = () => {
    this.setState({ ...this.setState, isLoggedIn: false });
  };
  submitAllowedSpace = (user) => {
    axios.post("/updateAllowedSpace", {
      userid: user,
      "Allowed Space": this.state.userData[user]["Allowed Space"],
    });
  };
  render() {
    if (this.state.isLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="d-flex" id="wrapper">
        <div id="page-content-wrapper">
          <TopNav logout={this.logout} />
          <hr />
          <Banner state={this.state} />
          <hr />
          <UserTable
            selectUser={this.selectUser}
            state={this.state}
            updateAllowedSpace={this.updateAllowedSpace}
            submitAllowedSpace={this.submitAllowedSpace}
          />
        </div>
      </div>
    );
  }
}

export default AdminApp;
