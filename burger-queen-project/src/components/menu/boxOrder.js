import styles from "../../styles/boxOrder.module.css";
import  { useState, userEffect } from 'react'

export function BoXOrder (props) {
    const { arrayOrden }=props;
    const [count, setCount] = useState({})
    
    return (
        <div className={styles.burgerBox}>
                <label className={styles.customer}>Cliente: <input type="text" className={styles.customerName}></input></label>
                <p className="tabla">Tabla de ordenes holoooooo</p>
                
        </div>
        
    )
  }