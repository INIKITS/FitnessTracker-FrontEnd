import React from "react";
import { useState, useEffect } from "react";
import { getAllRoutines } from "../api";
import "../styles/Routines.scss";

function FormCard(props) {
  const [publicRoutines, setPublicRoutines] = useState([]);

  //   await getAllRoutines(setPublicRoutines);

  useEffect(() => {
    getAllRoutines(setPublicRoutines);
  }, []);

  return (
    <>
      <div id="routines-container">
        <div id="routines-wrapper">
          {publicRoutines.map((routine) => {
            return (
              <div className="routines-cards" key={routine.id}>
                <h3>ROUTINE</h3>
                <div className="routine-contents">
                  <h4 id="routines-title">{routine.name}</h4>
                  <p>author: {routine.creatorName}</p>
                  <p>goal: {routine.goal}</p>
                  <p>description: {routine.description}</p>
                </div>
                {routine.activities.map((activity) => {
                  return (
                    <>
                      <hr />
                      <h3>ACTIVITY</h3>
                      <div key={activity.id} className="activity-contents">
                        <p>activity: {activity.name}</p>
                        <p>description: {activity.description}</p>
                        <p>duration: {activity.duration}</p>
                        <p>count: {activity.count}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FormCard;
