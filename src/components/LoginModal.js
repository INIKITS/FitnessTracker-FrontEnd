import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api";

function LoginModal(props) { 
        const [error, setError] = React.useState(null);
        const [callSuccess, setCallSuccess] = React.useState(null);
        const {
          setUsername,
          username,
          setPassword,
          password,
          setUserToken,
          setIsLoggedIn,
        } = props;

        const handleSubmit = (event) => {
            event.preventDefault();
            registerUser(
              username,
              password,
              setUsername,
              setPassword,
              setUserToken,
              setIsLoggedIn,
              setError,
              setCallSuccess
            );
          };


    return (
        <>
        <div id="side-bar">
          <div id="new-post-form">
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <label htmlFor="title">Username:</label>
              <input
                type="text"
                id="login-title"
                name="login"
                required={true}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <label htmlFor="body">Password:</label>
              <input
                type="password"
                id="login-password"
                name="password"
                required={true}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              {callSuccess ? null : <p>{error}</p>}
              <button type="submit">Register</button>
              <Link to="/">Already have an account? Click here to login</Link>
            </form>
          </div>
        </div>
      </>
    )
  }

  export default LoginModal;

