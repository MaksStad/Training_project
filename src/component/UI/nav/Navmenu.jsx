import React from 'react';
import icon from "../../../img/icon.jpg";
import classes from './Navmenu.module.css'
const Navmenu = () => {
  return (
    <nav className={classes.Header__menu}>
      <ul className={classes.Menu__list}>
        <li className={classes.Menu__item}><a href="" className={classes.Menu__link}>Home</a></li>
        <li className={classes.Menu__item}><a href="" className={classes.Menu__link}>Products</a></li>
        <li className={classes.Menu__item}><a href="" className={classes.Menu__link}>Services
          <img src={icon} alt="Icon" className={classes.Menu__icon}/></a>
        </li>
        <li className={classes.Menu__item}><a href="" className={classes.Menu__link}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navmenu;