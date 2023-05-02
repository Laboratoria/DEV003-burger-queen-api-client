import React, { useState } from "react";
// este componente deberían tener solo la fcion de pintar datos. quitar total del usestate
export const TableOrder = () => {
    const [order, setOrder] = useState([{
        products: [],
        total: 0,
        customer : {name: ''}
    }]);
    const handleOrder = (e) => {
        const { nameProduct, value } = e.target.value;
        setOrder((preOrder)=>({
            ...preOrder,
            products : [preOrder.products],
        }))
    };
    return(
        <div>
            <p >Tabla de ordenes</p>
        </div>
    )
}