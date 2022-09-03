import React from "react";
import { useEffect } from "react";

export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export async function registerUser(
  username,
  password,
  setUsername,
  setPassword,
  setUserToken,
  setIsLoggedIn,
  setErrorMessage,
  setCallSuccess
) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    const data = await response.json();
    console.log("data", data);
    if (data.token) {
      setUserToken(data.token);
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          username: `${username}`,
          password: `${password}`,
          _id: `${data.user.id}`,
          token: `${data.token}`,
        })
      );
      setIsLoggedIn(true);
    } else if (data.error) {
      console.log("data.error", data.error);
      setCallSuccess(false);
      setErrorMessage(data.error);
      setTimeout(() => {
        setCallSuccess(true);
      }, 2000);
    }
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function login(
  username,
  password,
  setUsername,
  setPassword,
  setUserToken,
  setIsLoggedIn,
  setErrorMessage,
  setCallSuccess
) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("you made an error", err);
  }
}
export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
