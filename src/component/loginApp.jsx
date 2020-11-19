import React, { Component } from "react";
import "../css/login.css";
import Login from "./login";
import Signup from "./signup";
import axios from "axios";
import Admin from "./admin";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

class LoginApp extends Component {
  state = { selectedOption: "login" };
  signup = (user) => {
    axios
      .post("/signup", user)
      .then((res) => {
        alert("Sucess");
      })
      .catch((err) => console.log(err));
  };
  login = (user, password) => {
    axios
      .post("/loginAuth", { username: user, password: password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  setScreen = (screen) => {
    this.setState({ ...this.state, selectedOption: screen });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">{this.getSelectedOption()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getSelectedOption = () => {
    switch (this.state.selectedOption) {
      case "login":
        return <Login setScreen={this.setScreen} login={this.login} />;
      case "signup":
        return <Signup setScreen={this.setScreen} signup={this.signup} />;
      case "admin":
        return (
          <Admin setScreen={this.setScreen} adminLogin={this.adminLogin} />
        );

      default:
        break;
    }
  };
}

export default LoginApp;
