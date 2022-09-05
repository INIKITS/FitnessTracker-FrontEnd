import React from "react";
import { useState, useEffect } from "react";
import { getAllRoutines, getRoutinesById, deleteRoutine } from "../api";
import "../styles/Routines.scss";

function MyRoutinesCard(props) {
  const [myRoutines, setMyRoutines] = useState([]);
  const { errorMessage, setErrorMessage, userToken, username, userId } = props;

  useEffect(() => {
    getRoutinesById(myRoutines, setMyRoutines, userToken, username, userId);
  }, [myRoutines]);

  const handleDelete = (event, routineId) => {
    event.preventDefault();
    deleteRoutine(routineId, userToken);
  };

  return (
    <>
      <div id="routines-container">
        <div id="routines-card">
          {myRoutines.map((routine) => {
            return (
              <div key={routine.id}>
                <h3 id="routines-title">{routine.name}</h3>
                <p>{routine.goal}</p>
                <button
                  id="routine-delete"
                  onClick={(e) => handleDelete(e, routine.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyRoutinesCard;
