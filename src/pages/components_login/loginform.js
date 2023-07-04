import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'
import { TokenContext } from '../components_waiter/tokenContext'

const patterns = {
    email:  /^\w.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,10}$/
}

export default function LoginForm() {

  const router = useRouter()
  const {setLoginData} = useContext(TokenContext);

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleInput = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleForm = (e) => {
      e.preventDefault()
        
      const { email, password } = values;

      if (!email.match(patterns.email)) {
        setErrorMessage(`\u25EC Ingresa un correo electrónico válido`);
        return;
      }
      if (!password.match(patterns.password)) {
        setErrorMessage(`\u25EC La contraseña debe contener letras y números con un máximo de 10`);
        return;
      }
      setValues({
        email: '',
        password: ''
      });
      

        axios.post('http://localhost:8080/login', {"email": email, "password": password})
        .then(response => {
            setLoginData({
              token : response.data.accessToken,
              userId: response.data.user.id
            })
            
            setTimeout(() => {
              router.push('/waiter');
            }, 500);
        })
        .catch(err => setErrorMessage('No tiene autorización para ingresar al sistema.'))
        
    }
    useEffect(() => {
     const timeout = setTimeout(() => {
        setErrorMessage('');
     }, 2500);
    
     return () => {
        clearTimeout(timeout);
     };
     
    }, [errorMessage]);
  
   
    return (
        <>
        <form className={styles.form_container} onSubmit={handleForm} role='form' >
            <h2 className={styles.formTitle}>Inicia <span className={styles.formTitleTwo}>sesión</span></h2>

            <div className={styles.input__group}>
              <input onChange={handleInput} className={styles.form__input} type="email" value={values.email} name="email" placeholder=" " autoComplete='off' />
              <label htmlFor="email" className={styles.form__Label} >Correo electrónico:</label>
            </div> 

            <div className={styles.input__group}>
              <input onChange={handleInput} className={styles.form__input} type="text" value={values.password} name="password" maxLength={10} placeholder=" " autoComplete='off' />
              <label htmlFor="password" className={styles.form__Label} >Contraseña:</label>
            </div>

            <input className={styles.login_submit}  type="submit" value="Ingresar"/>
        </form>
      
        <div data-testid = "errorDiv" className={styles.errorsDiv} style= {{opacity: errorMessage ? 1 : 0}}>
          <p className={styles.errors} >{errorMessage}</p>
        </div>
      </>
    )
}