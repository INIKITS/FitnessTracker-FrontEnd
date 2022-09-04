import React from "react";
import { NavLink } from "react-router-dom";
import { CreateRoutineForm, MyRoutinesCard } from "../components";

function MyRoutines(props) {
  const { errorMessage, setErrorMessage, userToken, username, userId } = props;
  return (
    <>
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
    </>
  );
}

export default MyRoutines;
