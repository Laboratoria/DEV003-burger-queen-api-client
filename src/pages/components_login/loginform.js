import styles from '../styles/Login.module.css'
import { useState } from 'react'

export default function LoginForm() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
 
    return (
        <>
        <form className={styles.form_container}>
            <h2 className={styles.loginTitle}>Inicia sesión en BQ</h2>
            <div className={styles.input__group}>
              <input onChange={(event) => {setMail(event.target.value)}} className={styles.form__input} type="text" value={mail} name="user" placeholder=" " />
              <label htmlFor="mail" className={styles.form__Label} >Correo electrónico:</label>
            </div> 

            <div className={styles.input__group}>
              <input onChange={(event) => {setPassword(event.target.value)}} className={styles.form__input} type="text" value={password} name="password" placeholder=" " />
              <label htmlFor="password" className={styles.form__Label} >Contraseña:</label>
            </div>

            <input className={styles.login_submit} type="submit" value="Ingresar"/>
        </form>
        </>
    )
}