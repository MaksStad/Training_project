import React from 'react';
import classes from './ButtonEquals.module.css'
import Input from "./UI/Input";

const ButtonEquals = () => {

  const comment = []

  function one() {
      let num1 = document.getElementsByTagName("input")[0].valueAsNumber;
      let num2 = document.getElementsByTagName("input")[1].valueAsNumber;
      let date = new Date().toLocaleString();
      let value = `Сумма: ${num1+num2}Дата - ${date}`;
      comment.unshift(value);
    list();
  };

  function list() {
    let sum = '';
    for (let i = 0; i < comment.length; i++) {
      sum += `<li>${comment[i]}</li>`;
    };
    document.querySelector('ol').innerHTML = sum;
  }

  return (
    <button className={classes.main__buttonEquals}
            onClick={one}>RESULT</button>
  );
};

export default ButtonEquals;