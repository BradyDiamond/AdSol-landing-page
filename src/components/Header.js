import '../App.css';
import logoImage from "./../img/logo.jpg";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Header() {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
      let moving = window.pageYOffset 
      setVisible(position > moving);
      setPosition(moving)
      };
        window.addEventListener("scroll", handleScroll);
          return(() => {
        window.removeEventListener("scroll", handleScroll);
      })
  })

const cls = visible ? "visible" : "hidden";

  return (
  <img className={cls} src={logoImage} href='https://www.advertisingsolutions.agency/'/>
  )
}

export default Header