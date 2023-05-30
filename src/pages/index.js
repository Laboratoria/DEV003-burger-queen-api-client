import LoginForm from './components_login/loginform'
import styles from './styles/Login.module.css'

export default function Home() {
  return (
    <>
    <header style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src='/bqlogo.png' className={styles.logoBq} />
      <h2 className={styles.logintitle} >Burger Queen</h2>
    </header>
      <main className={styles.login_container} >
        <LoginForm/>
        <img src='/burger_login.png' className={styles.loginburger} />
      </main>
      
    </>
  )
}
