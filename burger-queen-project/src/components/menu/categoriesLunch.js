import styles from "../../styles/boxCategoriesMenuFood.module.css";
//Por el momento no se utiliza por cantidad de pproductos minima
export function BoxCategoriesMenuFood () {
    return (
        <div className={styles.BoxCategory}>
                <h1 className={styles.titleCategory}>CATEGORIAS:</h1>
                <button className={styles.btnBurgers}> Hamburguesas </button>
                <button className={styles.btnTopics}> Acompañamientos </button>
                <button className={styles.btnDrinks}> Bebidas </button>
            </div>
        
    )
  }