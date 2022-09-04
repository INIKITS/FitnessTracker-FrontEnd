import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {getActivities} from '../api';


function Activities(props) {
  const [activities,setActivities]=useState([])
  useEffect(()=>{
    getActivities()
    .then(data => setActivities(data))
    .catch(console.error)
  },[activities])
  return (
  <div> 
  
    {activities && activities.map((activity)=>{
      return(
        <div key={activity.id}>
          <p>{activity.name}</p>
          <p>{activity.description}</p>
        </div>
      )
    })}
    </div>
  )
}




export default Activities;
