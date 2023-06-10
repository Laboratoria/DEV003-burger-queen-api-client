import { useContext } from "react";
import { KitchenContext } from "./kitchenContext";
import style from '../styles/Kitchen.module.css'

export function AllOrder () {
    const orderContent = useContext(KitchenContext)
    const ordered = orderContent.sort((a,b) => b.id - a.id)

    return (
        <>
        {
            ordered.map((element,index) => {
              const orderProducts = element.products

              return (
                <div key={index} className={style.order__box}>
                    <img src='/bqlogo.png'></img>
                    <h3>Orden N° {element.id}</h3>
                    <h3>Cliente: {element.client}</h3>
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
                  <p>Pedido listo</p>
                  <input type="Checkbox"/>

                </div>
              )
            })
        }
        </>
    )
}