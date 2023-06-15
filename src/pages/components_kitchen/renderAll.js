import { useContext } from "react";
import { TokenContext } from "../components_waiter/tokenContext";
import { KitchenContext } from "./kitchenContext";
import axios from "axios";
import style from '../styles/Kitchen.module.css'


export function AllOrder () {
    const orderContent = useContext(KitchenContext)
    const {loginData} = useContext(TokenContext)
    const token = loginData.token

    const ordered = orderContent.sort((a,b) => b.id - a.id)
 

    const handleIsReady = ( parentId) => {
        const orderId = parentId
        //contador de cuanto tardó en cumplirse
        axios.get(`http://localhost:8080/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const savedOrder = response.data
            axios.put(`http://localhost:8080/orders/${orderId}`, {
                ...savedOrder,
                "status": "Ready to deliver"
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(console.log)
            .catch(console.log)
        })
        .catch(console.log)
        
    }

    return (
        <>
        {
            ordered.map((element) => {
              const orderProducts = element.products

              return (
                <div key={element.id} className={style.order__box}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                        <img src='/bqlogo.png'></img>
                        <h2 className={style.bqtitle} >Burger Queen</h2>
                    </div>
                    
                    <h3> Orden N° {element.id}</h3>
                    <h3 className={style.client} >Cliente: {element.client}</h3>
                    <h3>Fecha: <span style={{fontFamily: "monospace"}}>{element.dataEntry}</span></h3>
                  {
                  orderProducts.map((item) => {
                      return (
                          <section key={item.id} className={style.product__info} >
                            <p className={style.orderQty}>{item.qty}</p>
                            <p>{item.product.name}</p>
                          </section> 
                        )
                            
                    })
                  }
                  <div className={style.check__div} >
                    <p style={{fontSize: 20}} >Pedido listo:</p>
                  <label htmlFor={`checkbox-${element.id}`} className={style.lbl__checkbox}>
                    <input 
                    type="Checkbox" 
                    id={`checkbox-${element.id}`}
                    className={style.checkbox} 
                    onChange={(e) => {
                        handleIsReady(element.id); 
                        e.target.setAttribute('disabled', true)
                        e.target.setAttribute('checked', true)
                    }}
                    />
                    <span  className={style.slider}></span>
                  </label>
                  </div>
                  
                </div>
              )
            })
        }
        </>
    )
}