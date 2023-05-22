import styles from '../styles/Login.module.css'
import { useState } from 'react'

const patterns = {
    email: /^\w.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/
}

export default function LoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const handleInput = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(values)
        setValues({
            email: '',
            password: '',
            error: values.error = !patterns.email.test(e.target.value) ?? undefined
        });
    }
 
    return (
        <>
        <form className={styles.form_container} onSubmit={handleForm} >
            <h2 className={styles.formTitle}>Inicia <span className={styles.formTitleTwo}>sesión</span></h2>

            <div className={styles.input__group}>
              <input onChange={handleInput} className={styles.form__input} type="text" value={values.email} name="email" placeholder=" " />
              <label htmlFor="email" className={styles.form__Label} >Correo electrónico:</label>
            </div> 

            <div className={styles.input__group}>
              <input onChange={handleInput} className={styles.form__input} type="text" value={values.password} name="password" placeholder=" " />
              <label htmlFor="password" className={styles.form__Label} >Contraseña:</label>
            </div>

            <input className={styles.login_submit} type="submit" value="Ingresar"/>
        </form>
        </>
    )
}