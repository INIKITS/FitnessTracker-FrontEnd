import React from 'react';
import { NavLink } from 'react-router-dom';
import {activities} from '../api';

function Activities(props) {
  return (
  <div> 
    <h1>{activities.name}</h1>
    </div>
  )
}




export default Activities;
