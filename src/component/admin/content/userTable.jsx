import React, { Component } from "react";
import UserActivityModal from "./userActivityModal";
class UserTable extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              {Object.keys(
                this.props.state.userData[
                  Object.keys(this.props.state.userData)[0]
                ]
              ).map((key) => (
                <th scope="col" key={key}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.state.userData).map((userid) => (
              <tr key={userid}>
                {Object.keys(this.props.state.userData[userid]).map((key) => (
                  <td key={key}>{this.props.state.userData[userid][key]}</td>
                ))}

                <td>
                  <a
                    data-toggle="modal"
                    data-target=".modalVal"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.selectUser(userid)}
                  >
                    More...
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="modal fade modalVal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content " style={{ padding: 10 }}>
              <UserActivityModal
                userDetails={
                  this.props.state.userData[this.props.state.selectedUser]
                }
                state={this.props.state}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTable;
