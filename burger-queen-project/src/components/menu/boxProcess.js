import styles from "../../styles/boxOrder.module.css";
export function BoxProcess () {
    return (
        <div className={styles.processbox}>
                <button className={styles.CancelORder}>CANCELAR</button>
                <button className={styles.SendOrder}>ENVIAR</button> 
            </div>
        
    )
  }