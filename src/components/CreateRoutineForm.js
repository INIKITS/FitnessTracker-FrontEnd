import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createRoutine } from "../api";
import { FaUser } from "react-icons/fa";
import "../styles/Login-Register.scss";

function CreateRoutineForm(props) {
  const [routineTitle, setRoutineTitle] = React.useState("");
  const [routineDescription, setRoutineDescription] = React.useState("");
  const { errorMessage, setErrorMessage, userToken } = props;
  const [callSuccess, setCallSuccess] = React.useState(true);
  const [isPublic, setIsPublic] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRoutine(
      routineTitle,
      routineDescription,
      isPublic,
      setErrorMessage,
      setCallSuccess,
      userToken
    );
  };

  return (
    <>
      <div id="create-routine-form">
        <div id="new-routine-form">
          <form onSubmit={handleSubmit}>
            <h2>Create Routine</h2>
            <div className="form-group">
              <input
                type="text"
                id="routine-title"
                name="title"
                placeholder="Enter routine name"
                required={true}
                onChange={(e) => {
                  setRoutineTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="routine-description"
                name="description"
                placeholder="Enter routine description"
                required={true}
                onChange={(e) => {
                  setRoutineDescription(e.target.value);
                }}
              ></input>
            </div>
            <span> is public? </span>
            <input
              type="checkbox"
              name="isPublic "
              checked={isPublic}
              onChange={() => {
                setIsPublic((old) => !old);
              }}
            />
            {callSuccess ? null : <p id="register-error">{errorMessage}</p>}
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateRoutineForm;
