import { useContext } from "react";
import style from "../../styles/viewAllFood.module.css";
import { ContextOrder } from "./contextOrder";

export const HandlerOrder = (props /*setValue, value, counter, data, addItem*/ ) => {
    let [order, setOrder] = useContext(ContextOrder);
    const addItem = () => {
        const takeOrder = {
            name: props.name,
            id: props.id,
            price: props.price,
            counter: 1,
        }
        setOrder(order.concat(takeOrder));
        console.log(order);
    }
    return (
        <div>
            <div className={style.img}>
                <img className={style.product} src={props.img} alt="Productos" />
            </div>
            <p className={style.p}>${props.price}</p>
            <h3 className={style.h3}>{props.name}</h3>
            <button className={style.btnAdd} onClick={() => { /*falta funcion*/ }}>-</button>
            <div className={style.counter}><p></p></div>
            <button className={style.btnAdd} onClick={addItem}>+</button>
        </div>

    )
}