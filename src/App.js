import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  MyRoutines,
  Routines,
  Activities,
  Login,
  Register,
} from "./pages";
import { Header, Footer } from "./components/index";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      const userInfo = JSON.parse(user);
      setUserToken(userInfo.token);
    }
  }, []);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/routines" element={<Routines />} />

        <Route
          exact
          path="/myroutines"
          element={
            <MyRoutines
              userToken={userToken}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          }
        />

        <Route exact path="/activities" element={<Activities />} />

        <Route
          exact
          path="/login"
          element={
            <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            userToken={userToken}
            setUserToken={setUserToken}
            setIsLoggedIn={setIsLoggedIn}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            />
          }
        />

        <Route
          exact
          path="/register"
          element={
            <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            userToken={userToken}
            setUserToken={setUserToken}
            setIsLoggedIn={setIsLoggedIn}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
