import { useRouter } from 'next/router';
import styles from "../../styles/boxOrder.module.css";

export function BtnProcessOrder () {
    const router = useRouter();
    return (
        <div className={styles.processbox}>
                <button className={styles.CancelORder} onClick={()=>router.push('/menu')}>CANCELAR</button>
                <button className={styles.SendOrder}>ENVIAR</button> 
            </div>
        
    )
  }