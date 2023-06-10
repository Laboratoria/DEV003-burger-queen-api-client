import waiter from '../styles/Waiter.module.css'
import { useState, useContext } from 'react'
import { TokenContext } from './tokenContext'
import { TotalContext } from './totalContext'
import { OrderContext } from './orderContext'
import RenderOrderProduct from './renderorder'
import axios from 'axios'
import { showDate } from './date'

export default function Orden(){

  const [client, setClient] = useState('')
  const [total, setTotal] = useContext(TotalContext) 
  const [order, setOrder] = useContext(OrderContext)
  const {loginData} = useContext(TokenContext)
  
  const token = loginData.token
  
  function sendToKitchen() {

    setClient('')
    setOrder([])
    setTotal(0)
  
    const orderData = {
      userId: loginData.userId,
      client: client,
      products: order,
      status: 'pending',
      dataEntry: showDate()
    }

    axios.post('http://localhost:8080/orders', orderData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(console.log)
    .catch(console.log)
    
  }

    return (
      <div className={waiter.orderComp}>
        <h2 className={waiter.underline}>orden</h2>
        <div></div>
        <div className={waiter.orderBox}>
            <input onChange={(event) => setClient(event.target.value)} className= {waiter.client}placeholder= "Cliente" value={client}/>
            <input className= {waiter.table}placeholder= "Mesa"/>
             {
              order.map((item, index) =>{
           
                function decreaseQty (){
                  setTotal(total - item.product.price)

                  if(order[index].qty > 1) {
                    order[index].qty = order[index].qty - 1

                  } else if(order[index].qty === 1) {
                    setOrder(order.filter(element => element.product.id !== item.product.id))
                  }
              }
                return (
                  <div key={index} className={waiter.divOrder}>
                  <RenderOrderProduct
                  name={item.product.name}
                  price={item.product.price}
                  qty={item.qty}
                  decreaseQty={decreaseQty}
                />
                </div>
                )
              }) 
            }
              
            <p className={waiter.totalOrder}>Total: $ {total} </p>
        </div>

        <div className= {waiter.orderBtns}>
          <button onClick={sendToKitchen} className={waiter.sendKitchen}>Enviar</button>
          <button onClick={() => {setTotal(0); setOrder([]); setClient('') }} className={waiter.cleanOrder}>Limpiar Orden</button>
        </div>

      </div>
    )
}
