import React, { Component } from "react";
class Signup extends Component {
  state = {};
  Refs = {
    name: React.createRef(),
    email: React.createRef(),
    userid: React.createRef(),
    password: React.createRef(),
  };
  render() {
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4">Welcome</h3>
        <form
          onSubmit={() => {
            console.log(this.Refs.name.current.value);
            this.props.signup({
              name: this.Refs.name.current.value,
              userid: this.Refs.userid.current.value,
              password: this.Refs.password.current.value,
              email: this.Refs.email.current.value,
            });
          }}
        >
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              ref={this.Refs.email}
            />
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              required
              ref={this.Refs.name}
            />
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="userid"
              className="form-control"
              placeholder="choose a userid"
              required
              ref={this.Refs.userid}
            />
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              ref={this.Refs.password}
            />
          </div>
          <div className="form-label-group">
            <input
              type="password"
              id="inputPasswordConfirm"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
          >
            Sign up
          </button>
          <div className="text-center">
            <a
              className="small"
              onClick={() => this.props.setScreen("login")}
              href
            >
              Back to login page
            </a>
          </div>
          <div className="text-center">
            <a
              className="small"
              onClick={() => this.props.setScreen("admin")}
              href
            >
              Admin Login
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
