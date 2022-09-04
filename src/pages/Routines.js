import React from "react";
import { NavLink } from "react-router-dom";
import { FormCard } from "../components";

function Routines(props) {
  return (
    <div className="public-routines">
      <h1>Public Routines</h1>
      <div className="pub-container">
        <FormCard />
      </div>
    </div>
  );
}

export default Routines;
