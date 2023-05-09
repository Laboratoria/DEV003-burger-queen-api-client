import Image from "next/image";
import logo from "../../../public/assets/3.png";
import styles from "../../styles/headerMenu.module.css"

export function HeaderMenu () {
    return (
        <div className={styles.header}>
          <header className="header">
            <Image src={logo} className={styles.logoBurger} alt="Logo burger"/>
          </header>
        </div>
    )
  }