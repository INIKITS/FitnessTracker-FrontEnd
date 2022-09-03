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
import { Header, Footer, LoginModal } from "./components/index";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
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
      <Header isLoggedIn={isLoggedIn} />
      {/* <LoginModal /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/activities" element={<Activities />} />

        <Route exact path="/routines" element={<Routines />} />

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
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
