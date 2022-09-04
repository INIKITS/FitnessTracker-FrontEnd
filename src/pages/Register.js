import React from 'react';
import { NavLink } from 'react-router-dom';
import { RegisterModal } from '../components/index';
import '../styles/Login-Register.scss';
import HomeImage from '../img/pexels-ketut-subiyanto-4436349.jpg';

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
    <div id='main'>
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
      <div id='hero'>
        <div className='bg-img'></div>
        <p>TRACK YOUR FITNESS</p>
      </div>
    </div>
  );
}

export default Register;
