import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginModal } from '../components/index';
import '../styles/Home.scss';
import HomeImage from '../img/pexels-ketut-subiyanto-4436349.jpg';

function Home(props) {

  return (
    <div id='home-wrapper'>
      <p className='title1'>TRACK YOUR</p>
      <p className='title2'>FITNESS</p>
      {/* <LoginModal /> */}
    </div>
  );
}

export default Home;
