import { Stint_Ultra_Condensed } from "next/font/google";
import style from "../../styles/all-food.module.css";
import { useState, useEffect } from "react"
import { CounterButton } from "./counterButton";

export function AllFood(props) {
    const categorySelect = props.title;
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
    // const updateObj = () => {setCount(c => c + 1)};

    // useEffect(()=> { 
    //     updateObj(count);
    // }, [count]);
    
    const newDataFilter = filterFood(data, categorySelect);
    // console.log(newDataFilter);
    return (
        <div className={style.container}>
            {newDataFilter.map((item, index) => {
                return (
                    <div className={style.content} key={index}>
                        { /* console.log(index)*/ }
                        <div className={style.img}>
                            <img className={style.product} src={item.image} alt="Productos" />
                        </div>
                        <p className={style.p}>${item.price}</p>
                        <h3 className={style.h3}>{item.name}</h3>
                        <div className={style.interaction}>
                            < CounterButton />
                            {/* <button className={style.btnAdd} onClick={()=> {newDataFilter.indexOf(item) === index ? setCount(c => c + 1):setCount(c => c + 0), setProduct([...product, item.name]), setPrice(price+item.price)}}>+</button> 
                            <div className={style.counter}><p>{count}</p></div>
                            <button className={style.btnAdd} onClick={()=> setCount(count-1)}>-</button>
                            */}
                        </div>
                        
                    </div>

                )
            })}
             {/* <div >
                <label>Cliente: <input type="text" ></input></label>
                <p >Tabla de ordenes</p>
                <div>{product} <p>{count} precio {price}</p> </div>
                
        </div> */}
        </div>

    )
}
