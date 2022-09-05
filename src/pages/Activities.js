import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getActivities } from "../api";
import { CreateActivityForm } from "../components";
import "../styles/Activities.scss";

function Activities(props) {
  const { errorMessage, setErrorMessage, userToken } = props;
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities()
      .then((data) => setActivities(data))
      .catch(console.error);
  }, [activities]);
  return (
    <div className="activity-wrapper">
      <div className="activity-container">
        <h1>Activities</h1>
        <CreateActivityForm
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          userToken={userToken}
        />
        <div className="activity-cards">
          {activities &&
            activities.map((activity) => {
              return (
                <div className="submit-cards" key={activity.id}>
                  <p>Name: {activity.name}</p>
                  <p>Description: {activity.description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Activities;
