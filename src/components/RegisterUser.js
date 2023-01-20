
import React, { useState } from "react";
import { fetchRegisterUser } from "../api";
import { Link, Redirect } from "react-router-dom";

const RegisterUser = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  hasUser,
  setHasUser,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = await fetchRegisterUser(
      e.target[0].value,
      e.target[1].value
    );
    console.log(userProfile);
    let storageToken = await userProfile.data.token;

    localStorage.setItem("token", storageToken);
    setToken(localStorage.getItem("token"));
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  
  function submitRedirect(e){
    e.preventDefault();
    window.location.href ="/posts"
    }

  return (
    <div className="newUserForm">
      <form id="forms" onSubmit={handleSubmit}>
        <input id="newUser"
          type="text"
          placeholder="username"
          onChange={handleUsername}
        ></input>
        <input id="newPassword"
          type="text"
          placeholder="password"
          onChange={handlePassword}
        ></input>
        <button id="submitButton"type="submit" onClick={(submitRedirect) => alert("Account has been created")} >Create User</button>
        <Link id="alreadyUser" to="./login">Already have a Login?</Link>
      </form>
    </div>
  );
};

export default RegisterUser;