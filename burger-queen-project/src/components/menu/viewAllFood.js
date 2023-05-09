import style from "../../styles/viewAllFood.module.css";
import { useState, useEffect} from "react";
import { BoxOrder } from "./boxOrder";
import { BtnProcessOrder } from "./btnProcessOrder";
import { HandlerOrder } from "./handlerOrder";

export function ViewAllFood({ type }) {
    const [data, setData] = useState([]);
    let [dataFilter, setDataFilter] = useState(0);

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
        })
    }
    const newDataFilter = filterFood(data, type);
    dataFilter = ()=>{setDataFilter(newDataFilter);};
    return (
        <div className={style.container}>
            {newDataFilter.map((item) => {
                return (
                    <div className={style.content} key={item.id}>
                            <HandlerOrder
                             img={item.image}
                             id={item.id}
                             name={item.name}
                             price={item.price}
                             />
                    </div>

                )
            })}
            <BoxOrder />
        <BtnProcessOrder />
        </div>
    )
};
