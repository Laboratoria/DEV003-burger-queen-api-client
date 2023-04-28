import { Stint_Ultra_Condensed } from "next/font/google";
import style from "../../styles/all-food.module.css";
import { useState, useEffect } from "react"
import { BoXOrder } from "./boxOrder";

export function AllFood(props) {
    const categorySelect = props.title;
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0)
    const [product, setProduct] = useState([]);
    const [price, setPrice]= useState(0);
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
    const newDataFilter = filterFood(data, categorySelect);
    console.log(newDataFilter);
    return (
        <div className={style.container}>
            {newDataFilter.map((item, index) => {
                return (
                    <div className={style.content} key={index}>
                        <div className={style.img}>
                            <img className={style.product} src={item.image} alt="Productos" />
                        </div>
                        <p className={style.p}>${item.price}</p>
                        <h3 className={style.h3}>{item.name}</h3>
                        <div className={style.interaction}>
                            <button className={style.btnAdd} onClick={()=> {setCount(item.counter+1), setProduct([...product, item.name]), setPrice(price+item.price)}}>+</button>
                            <div className={style.counter}><p>{item.counter}</p></div>
                            <button className={style.btnAdd} onClick={()=> setCount(item.counter-1)}>-</button>
                            
                        </div>
                        
                    </div>

                )
            })}
             <div >
                <label>Cliente: <input type="text" ></input></label>
                <p >Tabla de ordenes</p>
                <div>{product} <p>{count} precio {price}</p> </div>
                
        </div>
        </div>

    )
}
