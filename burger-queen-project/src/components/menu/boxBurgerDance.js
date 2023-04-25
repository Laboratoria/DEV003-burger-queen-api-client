import Image from "next/image";
import dance from "../../../public/assets/burgerDanceGif.gif";
import styles from "../../styles/boxBurgerDance.module.css"

export function BoXBurgerDance () {
    return (
        <div className={styles.burgerBox}>
        <Image src={dance} className={styles.danceBurger} alt="Dancing burger"/>
        </div>
        
    )
  }