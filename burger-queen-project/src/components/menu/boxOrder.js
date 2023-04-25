import styles from "../../styles/boxOrder.module.css";

export function BoXOrder () {
    return (
        <div className={styles.burgerBox}>
                <label className={styles.customer}>Cliente: <input type="text" className={styles.customerName}></input></label>
                <p className="tabla">Tabla de ordenes</p>
        </div>
        
    )
  }