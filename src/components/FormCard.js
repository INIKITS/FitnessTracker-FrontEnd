import React from "react";
import { useState, useEffect } from "react";
import { getAllRoutines } from "../api";
import "../styles/Routines.scss";

function FormCard() {
  const [publicRoutines, setPublicRoutines] = useState([]);

  //   await getAllRoutines(setPublicRoutines);

  useEffect(() => {
    getAllRoutines(setPublicRoutines);
    console.log("publicPosts", publicRoutines);
  }, []);

  return (
    <>
      <div id="routines-container">
        <div id="routines-card">
          {publicRoutines.map((routine) => {
            return (
              <div key={routine.id}>
                <h3 id="routines-title">{routine.name}</h3>
                <p>{routine.description}</p>
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
