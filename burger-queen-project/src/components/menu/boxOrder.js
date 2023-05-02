import styles from "../../styles/boxOrder.module.css";

export function BoxOrder () {    
    return (
        <div className={styles.burgerBox}>
                <label className={styles.customer}>Cliente: <input type="text" className={styles.customerName}></input></label>
        </div>
        
    )
  }