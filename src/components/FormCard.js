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
        <div id="routines-card">
          {publicRoutines.map((routine) => {
            return (
              <div key={routine.id}>
                <h3 id="routines-title">{routine.name}</h3>
                <p>{routine.creatorName}</p>
                <p>{routine.goal}</p>
                <p>{routine.description}</p>
                {routine.activities.map((activity) => {
                  return (
                    <>
                      <div key={activity.id} id="routine-activity-card">
                        <h4>activities</h4>
                        <p>name: {activity.name}</p>
                        <p>{activity.description}</p>
                        <p>duration: {activity.duration}</p>
                        <p>count: {activity.count}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
          <h3 id="routines-title"></h3>
        </div>
      </div>
    </>
  );
}

export default FormCard;
