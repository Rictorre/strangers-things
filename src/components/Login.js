import React, { useState } from "react";
import { fetchLogin } from "../api";
import { Link, useHistory, Redirect } from "react-router-dom";


const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  hasUser,
  setHasUser,
  setIsLoggedIn,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userProfile = await fetchLogin(event.target[0].value, event.target[1].value),
      token = await userProfile.data.token;
    let localToken = localStorage.setItem("token", token);
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    setIsLoggedIn(true);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);

  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  function submitRedirect(e){
    e.preventDefault();
    window.location.href ="/posts"
    }
  
  return (
    <div className="logInform">
      <form id="forms" onSubmit={handleSubmit}>
        <input id="username"
          type="text"
          placeholder="username"
          onChange={handleUsername}
        ></input>
        <input id="password"
          type="text"
          placeholder="password"
          onChange={handlePassword}
        ></input>
        <button id="submitButton" type="submit" onClick={(submitRedirect) => alert("You have successfully Signed in")}>Submit</button>
        <Link id="newUserLink" to="./createUser">Dont have and Account? Create one here</Link>
      </form>
    </div>
  );
};

export default Login;