import { useContext } from "react";
import { KitchenContext } from "./kitchenContext";

export function AllOrder () {
    const orderContent = useContext(KitchenContext)
    return (
        <>
        {
            orderContent.map((element,index) => {
                return (
                    <div key={index}>
                        <h3 style={{color: "wheat"}} >{element.client}</h3>
                    </div>
                )
            })
        }
        </>
    )
}