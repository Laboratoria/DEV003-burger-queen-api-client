import { Stint_Ultra_Condensed } from "next/font/google";
import style from "../../styles/viewAllFood.module.css";
import { useState, useEffect} from "react";
// import { CounterButton } from "./counterButton";
import { BoxOrder } from "./boxOrder";
import { BtnProcessOrder } from "./btnProcessOrder";
import { CounterButton } from "./counterButton";

export function ViewAllFood({ type }) {
    const [data, setData] = useState([]);
    let [dataFilter, setDataFilter] = useState(0);  
    // const [count, setCount] = useState(0)
    // const [product, setProduct] = useState([]);
    // const [price, setPrice]= useState(0);
    const [obj, setObj] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])
    const filterFood = (data, category) => {
        return data.filter((element) => {
            return element.type.includes(category);
        })//.map(obj => { return { ...obj, counter: 0 } })
    }
    // const addItem = (item) => {
    //     // const equalId = data.find(element => element.id === item.id);
    //     // if(equalId){
    //     //     const updatedItem ={...item, counter:1};
    //     //     setDataFilter((prevState) => [
    //     //     ...prevState,
    //     //     updatedItem
    //     //     ]);
    //     // }
    //     // console.log(newDataFilter);
    //     const takeOrder = {
    //         name: products.name,
    //         price: products.price,
    //         counter: 1,
    //     }

    //     setOrder(order.concat([takeOrder]))
    // }
    const newDataFilter = filterFood(data, type);
    dataFilter = ()=>{setDataFilter(newDataFilter);};
   
    // console.log(newDataFilter);
    return (
        <div className={style.container}>
            {newDataFilter.map((item) => {
                return (
                    <div className={style.content} key={item.id}>
                        {/* <div className={style.img}>
                            <img className={style.product} src={item.image} alt="Productos" />
                        </div>
                        <p className={style.p}>${item.price}</p>
                        <h3 className={style.h3}>{item.name}</h3> */}
                        {/* <div className={style.interaction}> */}
                            {/* < CounterButton id = {item.id} /> */}
                             {/* <button className={style.btnAdd} onClick={()=> {addItem; console.log(order.name)}}>+</button>                             */}
                            <CounterButton
                             img={item.image}
                             id={item.id}
                             name={item.name}
                             price={item.price}
                             />
                                        {/* <MyContext.Provider value={{obj, setObj, addItem }}>
                                            <CounterButton  setValue={setObj} counter = {item.counter} data = {newDataFilter} addItem ={addItem}/>
                                        </MyContext.Provider> */}
                        {/* </div> */}

                    </div>

                )
            })}
            <BoxOrder />
        {/* <MyContext.Provider value={{obj, setObj}}>
            <BoxOrder value = {obj} />
            </MyContext.Provider> */}

        <BtnProcessOrder />
        </div>
    )
};
