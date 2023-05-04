import React, { useEffect } from "react";
import { useState } from "react";
import style from "../../styles/all-food.module.css";

export const CounterButton = (props) => {
    const { id } = props;
    useEffect(() =>{
        console.log(id);
    })
    
    let [count, setCount] = useState(0);

const counterAdd = () => { setCount (c => c + 1)};
const counterLess = () => { count <= 0 ? count = 0: setCount (c => c - 1) };

return (
    <>
     <button className={style.btnAdd} onClick= {() => counterLess()}>-</button>
     <div className={style.counter}><p>{count}</p></div>
     <button className={style.btnAdd} onClick= {() => counterAdd()}>+</button>
    </>
   
)}