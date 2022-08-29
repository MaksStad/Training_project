import React from 'react';
import classes from './ResultTable1.module.css'

const ResultTable1 = (props) => {
   return (
      <tr className={classes.trResult}>
         <td>{props.number}</td>
         <td>{props.result.sum}</td>
         <td>{props.result.date}</td>
      </tr>
   );
};

export default ResultTable1;