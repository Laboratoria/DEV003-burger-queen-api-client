import styles from '../styles/Login.module.css'

export default function LoginForm() {
    return (
        <>
        <form className={styles.form_container}>
            <h2>Inicia sesión en BQ</h2>
            <div className={styles.input__group}>
              <input className={styles.form__input} type="text" name="user" placeholder=" " />
              <label htmlFor="user" className={styles.form__Label} >Nombre:</label>
            </div> 

            <div className={styles.input__group}>
              <input className={styles.form__input} type="text" name="password" placeholder=" " />
              <label htmlFor="password" className={styles.form__Label} >Contraseña:</label>
            </div>

            <input className={styles.login_submit} type="submit" value="Ingresar"/>
        </form>
        </>
    )
}