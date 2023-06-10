import { useContext } from "react";
import { KitchenContext } from "./kitchenContext";
import '../styles/Kitchen.module.css'

export function AllOrder () {
    const orderContent = useContext(KitchenContext)
    const ordered = orderContent.sort((a,b) => b.id - a.id)
    console.log(ordered)
    return (
        <>
        {
            ordered.map((element,index) => {
                const orderProducts = element.products

                return (
                    <div key={index} style={{color: "white"}}>
                        <h3>Orden N° {element.id}</h3>
                        <h3>Cliente: {element.client}</h3>
                    {
                        orderProducts.map((item) => {
                            return (
                               <section key={item.id}>
                                <p style={{ color: "red" }}>{item.qty}</p>
                                <p>{item.product.name}</p>
                            </section> 
                            )
                            
                        })
                    }

                    </div>
                )
            })
        }
        </>
    )
}