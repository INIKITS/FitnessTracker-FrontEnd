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
      setCallSuccess(true);
    } else if (data.error) {
      console.log("data.error", data.error);
      setCallSuccess(false);
      setErrorMessage(data.error);
      setTimeout(() => {
        setCallSuccess(true);
        setErrorMessage("");
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
    const response = await fetch(`${BASE_URL}/users/login`, {
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
      setCallSuccess(true);
    } else if (data.error) {
      console.log("data.error", data.error);
      setCallSuccess(false);
      setErrorMessage(data.error);
      setTimeout(() => {
        setCallSuccess(true);
        setErrorMessage("");
      }, 2000);
    }
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
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

export async function createActivity(
  activityTitle,
  activityDescription,
  setErrorMessage,
  setCallSuccess,
  userToken
) {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
      method: "POST",
      body: JSON.stringify({
        name: activityTitle,
        description: activityDescription,
      }),
    });

    const data = await response.json();
    if (data.error) {
      setCallSuccess(false);
      setErrorMessage(data.message);
      setTimeout(() => {
        setCallSuccess(true);
      }, 2000);
    }

    console.log("data :>> ", data);
    return data;
  } catch (error) {}
}

export async function getAllRoutines(setPublicRoutines) {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);
    setPublicRoutines(data);
    return data;
  } catch (error) {}
}

export async function getRoutinesById(
  myRoutines,
  setMyRoutines,
  userToken,
  username,
  userId
) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();

    if (data.goal) {
      setMyRoutines(data);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createRoutine(
  routineTitle,
  routineDescription,
  isPublic,
  setErrorMessage,
  setCallSuccess,
  userToken
) {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`,
      },
      method: "POST",
      body: JSON.stringify({
        name: routineTitle,
        goal: routineDescription,
        isPublic: isPublic,
      }),
    });

    const data = await response.json();
    if (data.error) {
      setCallSuccess(false);
      setErrorMessage(data.message);
      setTimeout(() => {
        setCallSuccess(true);
        setErrorMessage("");
      }, 2000);
    }

    return data;
  } catch (error) {}
}

export function logout(setIsLoggedIn) {
  localStorage.removeItem("user");
  console.log("madeithere");
  setIsLoggedIn(false);
}
