import React, {useState} from 'react';
import classes from './MainContent.module.css'
import Input from './UI/Input'
import ButtonEquals from "./ButtonEquals";
import ResultTable1 from "./ResultTable1";
import ArrowSortDown from "./UI/ArrowSortDown";
import ArrowSortUp from "./UI/ArrowSortUp";
import ArrowSortUpDown from "./UI/ArrowSortUpDown";


const MainContent = () => {
  const [results, setResults] = useState([])
   const [num, setNum] = useState()
   const [num1, setNum1] = useState()
   const [order, setOrder] = useState('ASC')
   const[field, setField] = useState('')


   const sortBy = (sort) => {
      const sorted = [...results].sort((a,b) =>
         order === 'ASC' ? a[sort] > b[sort] ? 1 : -1 : a[sort] < b[sort] ? 1 : -1
      );
      setResults(sorted);
      setOrder((order === 'ASC') ? 'DSC' : 'ASC');
   }


   const ArrowSort = () => order === 'ASC' ? <ArrowSortUp/> : <ArrowSortDown/>

   const sortField = (sort) => {
     sortBy(sort)
      setField(sort)
   }


   const addNewResult = (e) => {
     let sum = Number(num) + Number(num1);
     let date = new Date().toLocaleString();
     const newResult = {
        number: results.length+1,
        id: Date.now().valueOf(),
        sum,
        date,
     };
     setResults([newResult,...results])
  }


  return (
    <div className={classes.Main__content}>
      <hr className={classes.Hr__line}/>
      <Input
         Value={num}
         onChange={e => setNum(e.target.value)}
         type="number"
         placeholder="Введите число"
      />
      <span>+</span>
      <Input
         Value={num1}
         onChange={e => setNum1(e.target.value)}
         type="number"
         placeholder="Введите число"
      />
      <span>=</span>
      <ButtonEquals onClick={addNewResult}>RESULT</ButtonEquals>
       {results.length
          ?
          <table className={classes.Main__table1}>
             <colgroup>
                <col style={{width: '15%'}}/>
                <col style={{width: '35%'}}/>

             </colgroup>
             <tr>
                <th className={classes.tableTittle} colSpan={3}>История транзакций</th>
             </tr>
             <tr>
                <th>
                   <span
                      onClick={() => {sortField('number')}}>№{field ==='number' ? <ArrowSort/> : <ArrowSortUpDown/>}
                   </span>
                </th>
                <th>
                   <span
                      onClick={() => {sortField('sum')}}>Сумма{field ==='sum' ? <ArrowSort/> : <ArrowSortUpDown/>}
                   </span>
                </th>
                <th>
                   <span
                      onClick={() => {sortField('date')}}>Дата{field ==='date' ? <ArrowSort/> : <ArrowSortUpDown/>}
                   </span>
                </th>
             </tr>
             {results.map((result) =>
                <ResultTable1  result={result} key={result.id}/>
             )}
          </table>
          :
          <table className={classes.Main__table1}>
             <tr>
                <th className={classes.tableTittle} colSpan={3}>История транзакций пуста</th>
             </tr>
          </table>
       }
      <h1 className={classes.Main__title}>Dramatic</h1>
      <h4 className={classes.Main__text}>Objectively innovate empowered manufactured products whereas parallel platforms.</h4>
      <div className={classes.Main__actions}>
        <a href="" className={classes.Main__button}>ENGAGE NOW</a>
      </div>
    </div>
  );
};

export default MainContent;