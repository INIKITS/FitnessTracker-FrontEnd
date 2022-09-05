import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import "../styles/Login-Register.scss";
import { FaUser } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


function RegisterModal(props) {
  const navigate = useNavigate();

  const { errorMessage, setErrorMessage } = props;
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
      setErrorMessage,
      setCallSuccess
    );

    if (callSuccess) {
      navigate("/");
    }
  };

  return (
    <>
      <div id="modal">
        <div className="close-modal">
          <FaTimesCircle />
        </div>
        <div id="new-post-form">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
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
            <Link to="/login">
              Already have an account? Click here to login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterModal;
