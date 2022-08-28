import React from 'react';
import classes from './ResultTable.module.css'

const ResultTable = (props) => {
  return (
      <div className={classes.Main__tableItem}>
        <p>{props.number}. Cумма: {props.result.sum}</p>
        <p>Дата: {props.result.date}</p>
      </div>

  );
};

export default ResultTable;