import React from 'react';
import classes from './MainContent.module.css'


const MainContent = () => {
  return (
    <div className={classes.Main__content}>
      <hr className={classes.Hr__line}/>
      <h1 className={classes.Main__title}>Maks</h1>
      <h4 className={classes.Main__text}>Objectively innovate empowered manufactured products whereas parallel platforms.</h4>
      <div className={classes.Main__actions}>
        <a href="" className={classes.Main__button}>ENGAGE NOW</a>
      </div>
    </div>
  );
};

export default MainContent;