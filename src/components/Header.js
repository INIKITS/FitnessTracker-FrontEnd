import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../api';
import '../styles/Header-Footer.scss';
import Logo from '../img/spa-logotype.png';

function Header(props) {
  const { isLoggedIn, setIsLoggedIn } = props;

  const handleLogout = (event) => {
    event.preventDefault();
    logout(setIsLoggedIn);
  };

  return (
    <div id='header'>
      <div className='brand-logo'>
        <div className='logo-container'>
          <img src={Logo} alt='fitness-logo' />
        </div>
        <p>FITNESS TRACKER</p>
      </div>
      <nav>
        <ul id='nav-list'>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
            //   onClick={handleLogout}
          >
            HOME
          </NavLink>
          <NavLink
            to='activities'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            ACTIVITIES
          </NavLink>
          <NavLink
            to='routines'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            ROUTINES
          </NavLink>
          {isLoggedIn ? (
            <NavLink
              to='/myroutines'
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              MY ROUTINES
            </NavLink>
          ) : null}

          {isLoggedIn ? (
            <>
              <NavLink
                to='/'
                onClick={(event) => handleLogout(event)}
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                })}
                //   onClick={handleLogout}
              >
                LOGOUT
              </NavLink>
            </>
          ) : (
            <NavLink
              to='/login'
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              LOGIN
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
