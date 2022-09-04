import React from "react";
import { NavLink } from "react-router-dom";
import { RegisterModal } from "../components/index";
import "../styles/Home.scss";
import HomeImage from "../img/pexels-ketut-subiyanto-4436349.jpg";

function Register(props) {
  const { errorMessage, setErrorMessage } = props;
  const {
    setUsername,
    username,
    setPassword,
    password,
    userToken,
    setUserToken,
    setIsLoggedIn,
  } = props;

  return (
    <div id="home-wrapper">
      <p className="title1">TRACK YOUR</p>
      <p className="title2">FITNESS</p>
      <RegisterModal
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        userToken={userToken}
        setUserToken={setUserToken}
        setIsLoggedIn={setIsLoggedIn}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
}

export default Register;
