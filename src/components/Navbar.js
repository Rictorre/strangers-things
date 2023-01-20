import React from "react";
import { NavLink } from "react-router-dom";

  const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink id="postsLink" to="posts">All Posts</NavLink>
      <span> </span>
      <NavLink  id="profileLink" to="profile"> My Profile</NavLink>
      <span> </span>
      {localStorage.getItem("token") ? null : (
        <NavLink id="homeLink" to="login">Log in</NavLink>
      )}

    </div>
  );
};

export default Navbar;