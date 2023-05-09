import { useContext, useState } from "react";
import style from "../../styles/viewAllFood.module.css";
import { ContextOrder } from "./contextOrder";

export const HandlerOrder = ({ id, img, name, price }) => {
    const [disableButton, setDisableButton] = useState(false)
    let [order, setOrder] = useContext(ContextOrder);
    const addItem = () => {
        setDisableButton(true)
        const takeOrder = {
            name,
            id,
            price,
            counter: 1,
        }

        setOrder(order.concat(takeOrder))
    }
    return (
        <div>
            <div className={style.img}>
                <img className={style.product} src={img} alt="Productos" />
            </div>
            <p className={style.p}>${price}</p>
            <h3 className={style.h3}>{name}</h3>
            <button className={style.btnAdd} onClick={addItem} disabled={disableButton}>Agregar</button>
        </div>

    )
}
