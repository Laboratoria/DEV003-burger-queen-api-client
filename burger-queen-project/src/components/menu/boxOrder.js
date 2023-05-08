import styles from "../../styles/boxOrder.module.css";
import { useState } from "react";

export function BoxOrder(props) {
    // const [order, setOrder] = useState([{
    //     products: [],
    //     total: 0,
    //     customer: { name: '' }
    // }]);
    // const handleOrder = (e) => {
    //     // const { nameProduct, value } = e.target.value;
    //     // setOrder((preOrder) => ({
    //     //     ...preOrder,
    //     //     products: [preOrder.products],
    //     // }))
    //     setValue(e.target.value);
    // };
    return (
        <div className={styles.burgerBox}>
            <label className={styles.customer}>Cliente: <input type="text" className={styles.customerName}></input></label>
            <div>
            <p>{props.counter}</p>
            </div>
        </div>

    )
}