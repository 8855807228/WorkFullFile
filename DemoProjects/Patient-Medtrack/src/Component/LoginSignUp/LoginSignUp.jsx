import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginSignUp.css"; // Import the CSS file
import logo_med from "../Assets/images/logo-badge.svg";

function LoginSignUp() {
  return (
    <div className="container">
      <div className="d-flex align-items-center py-4 bg-body-tertiary">
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
          {/* SVG Icons here */}
        </svg>

        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button
            className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
            id="bd-theme"
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            aria-label="Toggle theme (dark)"
          >
            <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
              <use xlinkHref="#moon-stars-fill"></use>
            </svg>
            <span className="visually-hidden" id="bd-theme-text">
              Toggle theme
            </span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end shadow"
            aria-labelledby="bd-theme-text"
          >
            {/* Theme options here */}
          </ul>
        </div>

        <main className="form-signin w-100 m-auto">
          <form>
            <img
              className="mb-4"
              src={logo_med}
              alt=""
              width="72"
              height="57"
              style={{ marginLeft: "50px" }}
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default LoginSignUp;
