import styles from "../../styles/boxOrder.module.css";
import { ContextOrder } from "./contextOrder";
import { useContext } from "react";

export function BoxOrder() {
    const [order, setOrder] = useContext(ContextOrder);
    // console.log(order)
    // console.log(setOrder)
    return (
        <div className={styles.burgerBox}>
            <label className={styles.customer}>Cliente: <input type="text" className={styles.customerName}></input></label>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tbody >
                    {order.map((item, index) => {
                        console.log(item.name)
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.counter}</td>
                                <td>$ {item.price}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Total: $</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}