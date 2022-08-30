import React from 'react';
import logo from "../img/Logo.jpg";
import classes from './Header.module.css';
import Navmenu from "./UI/nav/Navmenu";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__container}>
        <a href="#" className={classes.Header__logo}> <img src={logo} alt="Logo"/> LOGO </a>
        <Navmenu/>
      </div>
    </header>
  );
};

export default Header;