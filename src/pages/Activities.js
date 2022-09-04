import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getActivities } from '../api';
import '../styles/Activities.scss';

function Activities(props) {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities()
      .then((data) => setActivities(data))
      .catch(console.error);
  }, [activities]);
  return (
    <div className='activity-wrapper'>
      {activities &&
        activities.map((activity) => {
          return (
            <div className='activity-container' key={activity.id}>
              <p>Name: {activity.name}</p>
              <p>Description: {activity.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Activities;
