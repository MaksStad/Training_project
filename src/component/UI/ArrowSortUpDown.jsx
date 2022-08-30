import React from 'react';
import arrowUpDown from '../../icon/arrows-sort.svg'
import classes from "./arrowSort.module.css";


const ArrowSortUpDown = () => {
   return (
      <img className={classes.arrowSortUpDown} src={arrowUpDown} alt="Arrow"/>
   );
};

export default ArrowSortUpDown;