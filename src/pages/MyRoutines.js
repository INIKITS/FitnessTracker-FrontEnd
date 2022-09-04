import React from "react";
import { NavLink } from "react-router-dom";
import { CreateRoutineForm } from "../components";
import "../styles/My- Routine.scss"

function MyRoutines(props) {
  const { errorMessage, setErrorMessage, userToken, username, userId } = props;
  return (
    
    <div className="myroutine">
      <h1>My Routines</h1>
      <CreateRoutineForm
        userToken={userToken}
        username={username}
        userId={userId}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <MyRoutinesCard
        userToken={userToken}
        username={username}
        userId={userId}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      </div>
    
  );
}

export default MyRoutines;
