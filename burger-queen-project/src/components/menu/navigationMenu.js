import { Style_Script } from 'next/font/google';
import { useRouter } from 'next/router';
import styles from "../../styles/boxBurgerDance.module.css"

export function NavigationMenu () {
  const router = useRouter();
    return (
      <div className={styles.NavigationMenu}>
        <nav className={styles.NavigationMenunav}>
               <button className={styles.NavigationbtnBreakfast} onClick={()=>router.push('/breakfast')}>Desayuno</button> 
               <button className={styles.NavigationbtnLunch} onClick={()=>router.push('/food')}>Almuerzo</button> 
            </nav>
            </div>
    )
  }
