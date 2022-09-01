import React from "react";
import { useEffect } from "react";

export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/"

export async function registerUser(username,password) {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: 'superman27',
              password: 'krypt0n0rbust'
            })
        })
        
    } catch (error) {
        console.error(error);
    }
}


export async function login(username, password) {
  try{
    const response= await fetch(`${ BASE_URL}/api/users/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }})})
      }catch (err) {
        console.error('you made an error', err);
    }
    }
  
