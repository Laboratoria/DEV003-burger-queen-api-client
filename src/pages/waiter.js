import Link from 'next/link'
import Image from 'next/image'
import Menus from './components_waiter/menus'
import Orden from './components_waiter/orden'
import waiterStyle from './styles/Waiter.module.css'
import { ProductContextProvider } from './components_waiter/productsContext'
import { TotalProvider } from './components_waiter/totalContext'
import { OrderProvider } from './components_waiter/orderContext'
import { TokenContextProvider } from './components_waiter/tokenContext'

export default function Waiter() {
    return (
        <>
        <header>
          <div className= {waiterStyle.header}>

          <Image 
          className={waiterStyle.logoBq}
          src="/bqlogo.png"
          alt= "BQ logo"
          width={170}
          height={140}
          priority
          />

          <h1 className= {waiterStyle.bqTitle}>Burger Queen</h1>
         <div className= {waiterStyle.divbtns}>
             <Link href='/kitchen'><button className={waiterStyle.wbtns}>Cocina</button> </Link>
             
             <button className={waiterStyle.wbtns}>Órdenes</button>
         </div>
          </div>
        </header>
        <TokenContextProvider>
        <ProductContextProvider>
          <OrderProvider>
          <TotalProvider>
           <div className= {waiterStyle.divMain}>
             <Menus/>
             <Orden/>
           </div>
          </TotalProvider>
          </OrderProvider>
        </ProductContextProvider>
        </TokenContextProvider>
         
        <Image 
        className={waiterStyle.backimg}
        src="/hamburguesafondo.png"
        alt="fondo"
        width={830}
        height={730}
        priority
        />
        </>
    )
}