import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginModal } from '../components/index';

function Home(props) {
  return (
    <>
      <h1>TRACK YOUR</h1>
      <h1>FITNESS</h1>
      <LoginModal />
    </>
  );
}

export default Home;
