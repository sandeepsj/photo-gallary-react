import axios from "axios";
import React, { Component } from "react";
class TopNav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Notifications <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a
                style={{ cursor: "pointer" }}
                class="nav-link"
                onClick={() => {
                  axios.get("/logout");
                  this.props.logout();
                }}
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNav;
