import React from "react";
import { NavLink } from "react-router-dom"
import { CreateRoutineForm } from "../components";
import "../styles/My-Routine.scss";
import {MyRoutinesCard} from "../components"


function MyRoutines(props) {
  const { errorMessage, setErrorMessage, userToken, username, userId } = props;
  return (
    <div className="myroutine">
      <div className="my-routine-container">
        <h1>My Routines</h1>
        <CreateRoutineForm
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          userToken={userToken}
        />
        
      <MyRoutinesCard
        userToken={userToken}
        username={username}
        userId={userId}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
  </div>
   </div>
  );
}

export default MyRoutines;
