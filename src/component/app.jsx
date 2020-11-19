import React, { Component } from "react";
import SideNav from "././nav/sidebar";
import "../css/simple-sidebar.css";
import TopNav from "./nav/topnav";
import DashBoard from "./page-contents/dashBoard";
import Gallary from "./page-contents/gallary";
import Profile from "./page-contents/profile";
import axios from "axios";
import { Redirect } from "react-router-dom";
class App extends Component {
  state = { selectedContent: 0, me: undefined, isLoggedIn: true };
  getMyUserName = () => {
    axios
      .get("/getMyUserName")
      .then((res) => {
        let log;
        if (res.data) {
          log = true;
        } else log = false;
        this.setState({ ...this.state, me: res.data, isLoggedIn: log });
      })
      .catch((err) => console.log(err));
  };
  logout = () => {
    this.setState({ ...this.setState, isLoggedIn: false });
  };
  updateMainContent = (selection) => {
    this.setState({ ...this.state, selectedContent: selection });
  };
  componentDidMount() {
    this.getMyUserName();
  }

  render() {
    if (this.state.isLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div class="d-flex" id="wrapper">
        <SideNav
          state={this.state}
          updateMainContent={this.updateMainContent}
        />

        <div id="page-content-wrapper">
          <TopNav logout={this.logout} />

          {this.getMainContent()}
        </div>
      </div>
    );
  }
  getMainContent = () => {
    switch (this.state.selectedContent) {
      case 0:
        return <DashBoard />;

      case 1:
        return <Gallary state={this.state} />;
      case 4:
        return <Profile />;
      default:
        break;
    }
  };
}

export default App;
