import React, {useState} from 'react';
import classes from './MainContent.module.css'
import Input from './UI/Input'
import ButtonEquals from "./ButtonEquals";
import ResultTable from "./ResultTable"
import ResultTable1 from "./ResultTable1";


const MainContent = () => {
  const [results, setResults] = useState([])
   const [num, setNum] = useState()
   const [num1, setNum1] = useState()


   const addNewResult = (e) => {
     let sum = Number(num) + Number(num1);
     let date = new Date().toLocaleString();
     const newResult = {
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
                <th>№</th>
                <th>Сумма</th>
                <th>Дата</th>
             </tr>
             {results.map((result, index) =>
                <ResultTable1 number={index + 1} result={result} key={result.id}/>
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