import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
function Header(props) {
  const { isLoggedIn } = props;

  console.log('isLoggedIn', isLoggedIn);
  return (
    <div id='header'>
      <h1 id='header-text'>Fitness Tracker</h1>
      <nav>
        <ul id='nav-list'>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Home
            </NavLink>
          </li>
          <li className='nav-text'>
            <NavLink
              to='activities'
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Activities
            </NavLink>
          </li>

          <li>
            <NavLink
              to='routines'
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Routines
            </NavLink>
          </li>

          <li>
            {isLoggedIn ? (
              <NavLink
                to='/'
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                })}
                //   onClick={handleLogout}
              >
                Log Out
              </NavLink>
            ) : (
              <NavLink
                to='/'
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                })}
              >
                Log in
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
