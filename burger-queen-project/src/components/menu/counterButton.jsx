import { useState } from "react";
import style from "../../styles/viewAllFood.module.css";


export const CounterButton = ({ setValue, value, counter, data, addItem }) => {
    // const { id } = props;
    // useEffect(() =>{
    //     console.log(id);
    //     console.log(value)
    // })
    
    let [count, setCount] = useState(0);

const counterAdd = () => { setCount (c => c + 1)};
const counterLess = () => { count <= 0 ? count = 0: setCount (c => c - 1) };
const handleOrder = (e) => {
    setValue(e.target.value);
    const newCounter = {...data};
    newCounter.counter = counterAdd();
    console.log(count);
    console.log('contador btn', counter);
    console.log(newCounter)
};
return (
    <>
     <button className={style.btnAdd} onClick= {(e) => { e.preventDefault(); counterLess(); handleOrder(e); addItem (data)}}>-</button>
     <div className={style.counter}><p>{count}</p></div>
     <button className={style.btnAdd} onClick= {(e) => { e.preventDefault(); counterAdd(); handleOrder(e)}}>+</button>
    </>
   
)}