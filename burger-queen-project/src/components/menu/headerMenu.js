import Image from "next/image";
import logo from "../../../public/assets/logoBurger.png";
import styles from "../../styles/headerMenu.module.css"

export function HeaderMenu () {
    return (
        <div className="header">
          <header className="header">
            <button className={styles.btnnn}>Hola</button>
            <Image src={logo} className={styles.logoBurger} alt="Logo burger"/>
          </header>
        </div>
    )
  }