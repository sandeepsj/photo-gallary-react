import React, { Component } from "react";
class Login extends Component {
  state = {};
  Refs = {
    email: React.createRef(),
    password: React.createRef(),
  };
  render() {
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4">Login as an Admin</h3>
        <form
          action="/adminHome"
          onSubmit={() =>
            this.props.adminLogin(this.Refs.password.current.value)
          }
        >
          <div className="form-label-group">
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="userid"
              required
              autoFocus
              ref={this.Refs.email}
              value="Admin"
              disabled
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

          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
          >
            Sign in
          </button>

          <div className="text-center">
            <a
              className="small"
              onClick={() => this.props.setScreen("signup")}
              href
            >
              Sign up
            </a>
          </div>
          <div className="text-center">
            <a
              className="small"
              onClick={() => this.props.setScreen("login")}
              href
            >
              User Login
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
