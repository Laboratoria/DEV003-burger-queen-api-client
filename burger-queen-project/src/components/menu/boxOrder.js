import styles from "../../styles/boxOrder.module.css";
import style from "../../styles/viewAllFood.module.css";
import { useContext } from "react";
import { ContextOrder } from "./contextOrder";


export function BoxOrder() {
    const [order, setOrder] = useContext(ContextOrder);
    // console.log(order)
    // console.log(setOrder)
    let addTotal = order.reduce((previous, current) => previous + current.price, 0);
    // setOrder(order.concat(addTotal))

    return (
        <div className={styles.burgerBox}>
            <label className={styles.customer}>Cliente: <input type="text" className={styles.customerName}></input></label>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th> </th>
                        <th>Cantidad</th>
                        <th> </th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tbody >
                    {order.map((item, index) => {
                        console.log(item.name)
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>
                                    <button className={style.btnAdd} onClick={() => { /*falta funcion*/ }}>-</button>
                                </td>
                                <td>
                                    <div className={style.counter}><p>{item.counter}</p></div>
                                </td>
                                <td>
                                    <button className={style.btnAdd} onClick={() => { /*falta funcion*/ }}>+</button>
                                </td>
                                <td>$ {item.price}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Total: ${addTotal}</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}