import '../App.css';
import logoImage from "./../img/logo.jpg";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Header() {
 
  return (
  <img className="logo-img" src={logoImage} href='https://www.advertisingsolutions.agency/'/>
  )
}

export default Header