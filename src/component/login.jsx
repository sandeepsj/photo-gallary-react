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
        <h3 className="login-heading mb-4">Welcome</h3>
        <form
          action="/home"
          onSubmit={() =>
            this.props.login(
              this.Refs.email.current.value,
              this.Refs.password.current.value
            )
          }
        >
          <div className="form-label-group">
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="userID"
              required
              autoFocus
              ref={this.Refs.email}
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

export default Login;
