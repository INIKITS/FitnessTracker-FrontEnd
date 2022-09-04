import React from "react";
import { NavLink } from "react-router-dom";
import { CreateRoutineForm } from "../components";

function MyRoutines(props) {
  const { errorMessage, setErrorMessage, userToken } = props;
  return (
    <>
      <h1>My Routines</h1>
      <CreateRoutineForm
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        userToken={userToken}
      />
    </>
  );
}

export default MyRoutines;
