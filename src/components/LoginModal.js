import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import "../styles/Login-Register.scss";
import { FaUser } from "react-icons/fa";

function LoginModal(props) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [callSuccess, setCallSuccess] = React.useState(true);
  const [modal, setModal] = React.useState(false);
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
    login(
      username,
      password,
      setUsername,
      setPassword,
      setUserToken,
      setIsLoggedIn,
      setErrorMessage,
      setCallSuccess
    );

    navigate("/");
  };

  return (
    <>
      <div id="modal">
        <div id="new-post-form">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <input
                type="text"
                id="login-title"
                name="login"
                placeholder="Enter username"
                required={true}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="Enter password"
                required={true}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            {callSuccess ? null : <p id="register-error">{errorMessage}</p>}
            <button type="submit">SUBMIT</button>
            <Link to="/register">Need an account? Click here to register</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
