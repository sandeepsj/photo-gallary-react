import React, { Component } from "react";
class SideNav extends Component {
  state = {};
  render() {
    console.log(this.props.state);
    return (
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Hi {this.props.state.me}!</div>
        <div class="list-group list-group-flush">
          <a
            onClick={() => this.props.updateMainContent(0)}
            class="list-group-item list-group-item-action bg-light"
          >
            Dashboard
          </a>
          <a
            onClick={() => this.props.updateMainContent(1)}
            class="list-group-item list-group-item-action bg-light"
          >
            Storage
          </a>

          <a
            onClick={() => this.props.updateMainContent(4)}
            class="list-group-item list-group-item-action bg-light"
          >
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default SideNav;
