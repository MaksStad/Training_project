import React from 'react';
import classes from './ResultTable1.module.css'
import IconDelete from "../icon/icon-delete.svg";

const ResultTable1 = (props) => (
      <tr className={classes.trResult}>
         <td>{props.number}</td>
         <td>{props.result.sum}</td>
         <td>{props.result.date}</td>
         <td><img onClick={() => props.remove(props.result)} className={classes.img} src={IconDelete} alt=""/></td>
      </tr>
   );


export default ResultTable1;