import { useContext } from "react";
import { KitchenContext } from "./kitchenContext";
import style from '../styles/Kitchen.module.css'


export function AllOrder () {
    const orderContent = useContext(KitchenContext)
    const ordered = orderContent.sort((a,b) => b.id - a.id)
 

    const handleIsReady = ( parentId) => {
        const orderId = parentId
        console.log(orderId)
        //consulta http a localhost / id del elemento a obtener
        //método PUT para actualizar
        
    }
    //Ejecucion dentro de then al finalizar consulta http
    //checked a true y deshabilitamos el checkbox
    const handleDisabled = (e) => {
        e.target.setAttribute('checked', true)
        e.target.setAttribute('disabled', true)
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
                    onChange={() => {handleIsReady(element.id)}}
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