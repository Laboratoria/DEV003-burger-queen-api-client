import LoginForm from './components_login/loginform'
import styles from './styles/Login.module.css'

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <img src='/bqlogo.png' className={styles.logoBq} />
      <h2 className={styles.logintitle} >Burger Queen</h2>
    </header>
      <main>
        <LoginForm/>
        <img src='/burger_login.png' className={styles.loginburger} />
      </main>
      
    </>
  )
}
