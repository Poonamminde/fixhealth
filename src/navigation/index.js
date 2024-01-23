import React from "react";
import logo from "../assets/logo.svg";
import "./index.css";

const index = () => {
  return (
    <div class="nav">
      <img src={logo} alt="logo" class="logo" />
      <div class="nav-tab">
        <h2>Home</h2>
        <h2>Services</h2>
        <h2>Blogs</h2>
        <h2>About</h2>
      </div>
    </div>
  );
};

export default index;
