import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginModal } from '../components/index';
import '../styles/Home.scss';
import HomeImage from '../img/pexels-ketut-subiyanto-4436349.jpg';

function Home(props) {
  return (
    <div id='main'>
      <LoginModal />
      <div id='hero'>
        <div className='bg-img'></div>
        <p>TRACK YOUR FITNESS</p>
      </div>
    </div>
  );
}

export default Home;
