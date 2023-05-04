import { Stint_Ultra_Condensed } from "next/font/google";
import style from "../../styles/viewAllFood.module.css";
import { useState, useEffect } from "react";
import { CounterButton } from "./counterButton";
import { BoxOrder } from "./boxOrder";
import { BtnProcessOrder } from "./btnProcessOrder";

export function ViewAllFood({ title }) {
    const [data, setData] = useState([]);
    // const [count, setCount] = useState(0)
    // const [product, setProduct] = useState([]);
    // const [price, setPrice]= useState(0);
    // const [obj, setObj] = useState({});
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])
    const filterFood = (data, category) => { 
        return data.filter((element)=> { 
            return element.type.includes(category);
        }).map(obj => {return { ...obj, counter: 0}})
    }

    const newDataFilter = filterFood(data, title);
    // console.log(newDataFilter);
    return (
        <div className={style.container}>
            {newDataFilter.map((item) => {
                return (
                    <div className={style.content} key={item.id}>
                        <div className={style.img}>
                            <img className={style.product} src={item.image} alt="Productos" />
                        </div>
                        <p className={style.p}>${item.price}</p>
                        <h3 className={style.h3}>{item.name}</h3>
                        <div className={style.interaction}>
                            < CounterButton id = {item.id} />
                            {/* <button className={style.btnAdd} onClick={()=> {newDataFilter.indexOf(item) === index ? setCount(c => c + 1):setCount(c => c + 0), setProduct([...product, item.name]), setPrice(price+item.price)}}>+</button>                            
                            */}
                        </div>
                        
                    </div>

                )
            })}
            <BoxOrder />
            <BtnProcessOrder />
        </div>

    )
}
