import React, { Component } from "react";
import axios from "axios";
class Profile extends Component {
  state = { profile: {} };
  Refs = {
    name: React.createRef(),
    email: React.createRef(),
    userid: React.createRef(),
    password: React.createRef(),
  };
  getMyProfile = () => {
    axios
      .get("/getMyProfile")
      .then((res) => {
        console.log(res);
        this.setState({ ...this.state, profile: res.data });
      })
      .catch((err) => console.log(err));
  };
  updateProfile = () => {
    let newProfile = {
      name: this.Refs.name.current.value,
      userid: this.Refs.userid.current.value,
      password: this.Refs.password.current.value,
      email: this.Refs.email.current.value,
    };
    axios.post("/updateProfile", newProfile).then((res) => {
      console.log(res);
    });
  };
  componentDidMount() {
    this.getMyProfile();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Edit Profile</h1>
          <hr />
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Name"
                  defaultValue={this.state.profile.name}
                  ref={this.Refs.name}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Email"
                  defaultValue={this.state.profile.email}
                  ref={this.Refs.email}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Unique User ID</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Unique User ID"
                  defaultValue={this.state.profile.userid}
                  ref={this.Refs.userid}
                  disabled
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-6">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  defaultValue={this.state.profile.password}
                  ref={this.Refs.password}
                />
              </div>
            </div>
            <button
              // type="submit"
              className="btn btn-primary"
              onClick={this.updateProfile}
            >
              Submit
            </button>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}

export default Profile;
