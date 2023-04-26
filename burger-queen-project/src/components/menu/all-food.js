import { Stint_Ultra_Condensed } from "next/font/google";
import style from "../../styles/all-food.module.css";
import { useState, useEffect } from "react"

export function AllFood() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])
    return (
        <div className={style.container}>
            {data.map(item => {
                return (
                    <div className={style.content}>
                        <div className={style.img}>
                        <img className={style.product} src={item.image} alt="Productos" />
                        </div>
                        <p>${item.price}</p>
                        <h3>{item.name}</h3>
                        <div className={style.interaction}>
                            <button className={style.btnAdd}>Añadir</button>
                        </div>
                    </div>

                )
            })}
        </div>

    )
}
