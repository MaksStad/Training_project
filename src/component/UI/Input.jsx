import React from 'react';
import classes from './Input.module.css'
const Input = () => {
  return (
    <input type="number" className={classes.main__input} placeholder="Введите число"/>

  );
};

export default Input;