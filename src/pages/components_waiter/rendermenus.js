import waiter from '../styles/Waiter.module.css'
import { TotalContext } from './totalContext'
import { useContext } from 'react'
import { OrderContext } from './orderContext'

export default function RenderMenus(props) {

    const [total, setTotal] = useContext(TotalContext)
    let [order, setOrder] = useContext(OrderContext)

    const toOrder = () => {
        setTotal(total + props.price)

        const orderToAdd = {
            qty: 1,
            product: {
            id: props.id,
            image: props.image,
            name: props.name,
            price: props.price,
            type: props.type,
            dateEntry: props.dateEntry   
            } 
        }

        const indexOfitemExistInOrder = order.findIndex((item) => item.product.id === props.id)
        
        if(indexOfitemExistInOrder !== -1) {
            order[indexOfitemExistInOrder] = {
                ...orderToAdd,
                qty: order[indexOfitemExistInOrder].qty + 1,
            }
        } else {
            setOrder(order.concat([orderToAdd]))
        }
    }
    
    return (
        <>
          <img src={props.image} alt={props.name} className={waiter.images}/>
           <p className={waiter.product}>{props.name} </p>
            <p className={waiter.productprice} > ${props.price} </p>                
            <button onClick={toOrder} className={waiter.addbtn} >Añadir</button>                
        </>                 
    )                 
}