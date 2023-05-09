import { useContext } from "react";
import style from "../../styles/viewAllFood.module.css";
import { ContextOrder } from "./contextOrder";

export const HandlerOrder = ({ id, img, name, price }) => {
    let [order, setOrder] = useContext(ContextOrder);
    const addItem = () => {
        const takeOrder = {
            name,
            id,
            price,
            counter: 1,
        }

        const indexOfitemExistInOrder = order.findIndex((item) => item.id === id)
        if (indexOfitemExistInOrder !== -1) {
            order[indexOfitemExistInOrder] = {
                ...takeOrder,
                counter: order[indexOfitemExistInOrder].counter + 1,
                price: order[indexOfitemExistInOrder].price + takeOrder.price
            };
            setOrder([...order]);
        } else {
            setOrder(order.concat(takeOrder))
        }
    }
    return (
        <div>
            <div className={style.img}>
                <img className={style.product} src={img} alt="Productos" />
            </div>
            <p className={style.p}>${price}</p>
            <h3 className={style.h3}>{name}</h3>
            <button className={style.btnAdd} onClick={addItem}>Agregar</button>
        </div>

    )
}
