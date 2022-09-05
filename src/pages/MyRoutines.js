import React from "react";
import { NavLink } from "react-router-dom";
import { CreateRoutineForm } from "../components";
import "../styles/My-Routine.scss";

function MyRoutines(props) {
  const { errorMessage, setErrorMessage, userToken } = props;
  return (
    <div className="myroutine">
      <div className="my-routine-container">
        <h1>My Routines</h1>
        <CreateRoutineForm
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          userToken={userToken}
        />
      </div>
    </div>
  );
}

export default MyRoutines;
