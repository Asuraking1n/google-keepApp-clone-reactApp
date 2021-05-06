import React from "react";
import logo from "./images/logo.png";
import "./index.css";

function Header() {
  return (
    <>
    <div className="header">
        <img src={logo} alt="logo" width="70" height="70"/>
        <h1> Google Keep App Clone</h1>
    </div>
    </>
  );
}

export default Header;
