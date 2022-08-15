import React from 'react'
import logoImage from "./../img/logo.jpg";

function Header() {
  return (
  <img className="navbar-logo" src={logoImage} href='https://www.advertisingsolutions.agency/'/>
  )
}

export default Header