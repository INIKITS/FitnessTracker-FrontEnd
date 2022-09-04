import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createActivity } from "../api";
import { FaUser } from "react-icons/fa";
import "../styles/Login-Register.scss";

function CreateActivityForm(props) {
  const [activityTitle, setActivityTitle] = React.useState("");
  const [activityDescription, setActivityDescription] = React.useState("");
  const { errorMessage, setErrorMessage, userToken } = props;
  const [callSuccess, setCallSuccess] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    createActivity(
      activityTitle,
      activityDescription,
      setErrorMessage,
      setCallSuccess,
      userToken
    );
  };

  return (
    <>
      <div id="create-activity-form">
        <div id="new-activity-form">
          <form onSubmit={handleSubmit}>
            <h2>Create Activity</h2>
            <div className="form-group">
              <input
                type="text"
                id="activity-title"
                name="title"
                placeholder="Enter Activity name"
                required={true}
                onChange={(e) => {
                  setActivityTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="Activity-description"
                name="description"
                placeholder="Enter Activity description"
                required={true}
                onChange={(e) => {
                  setActivityDescription(e.target.value);
                }}
              ></input>
            </div>
            {callSuccess ? null : <p id="register-error">{errorMessage}</p>}
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateActivityForm;
