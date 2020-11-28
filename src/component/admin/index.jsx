import React, { Component } from "react";
import TopNav from "./nav/topnav";
import Banner from "./content/banner";
import UserTable from "./content/userTable.jsx";
import { Redirect } from "react-router-dom";
class AdminApp extends Component {
  state = {
    isLoggedIn: true,
    userData: {
      sandeep: {
        Name: "Sandeep S J",
        UserID: "sandeep",
        Email: "sandeepsj0000@gmail.com",
        "Phone Number": "7594018731",
        "Allowed Space": 10240,
        "Used Space": 100,
      },
      san: {
        Name: "Sandeep S J",
        UserID: "san",
        Email: "ssj062@gmail.com",
        "Phone Number": "7594018731",
        "Allowed Space": 1024,
        "Used Space": 200,
      },
      sandy: {
        Name: "Sandeep S J",
        UserID: "sandy",
        Email: "ssj0000@gmail.com",
        "Phone Number": "7594018731",
        "Allowed Space": 1024 * 2,
        "Used Space": 180,
      },
    },
    selectedUser: null,
  };
  selectUser = (user) => {
    this.setState({ ...this.state, selectedUser: user });
  };
  logout = () => {
    this.setState({ ...this.setState, isLoggedIn: false });
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
          <Banner />
          <hr />
          <UserTable selectUser={this.selectUser} state={this.state} />
        </div>
      </div>
    );
  }
}

export default AdminApp;
