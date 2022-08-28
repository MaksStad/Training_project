import React, {useState} from 'react';
import classes from './ButtonEquals.module.css'
import Input from "./UI/Input";

const ButtonEquals = ({children, ...props}) => {
  return(
    <button {...props} className={classes.main__buttonEquals}>
      {children}
    </button>
  );
};


export default ButtonEquals;