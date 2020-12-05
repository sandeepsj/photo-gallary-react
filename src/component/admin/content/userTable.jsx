import React, { Component } from "react";
import UserActivityModal from "./userActivityModal";
class UserTable extends Component {
  state = {};
  render() {
    //console.log(Object.keys(this.props.state.userData).length);
    if (Object.keys(this.props.state.userData).length === 0) return <div></div>;
    return (
      <div className="container col-lg-8 col-12">
        <div>
          <table className="table table-striped table-dark ">
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
                      onClick={() => {
                        this.props.selectUser(userid);
                      }}
                    >
                      More...
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                updateAllowedSpace={this.props.updateAllowedSpace}
                submitAllowedSpace={this.props.submitAllowedSpace}
                userDetails={
                  this.props.state.userData[this.props.state.selectedUser]
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTable;
