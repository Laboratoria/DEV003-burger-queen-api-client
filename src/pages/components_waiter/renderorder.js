import waiter from "../styles/Waiter.module.css"
export default function RenderOrderProduct(props) {
    return (
        <>
            <button className={waiter.minusBtn} onClick={props.decreaseQty}> - </button>
            <p className={waiter.qty}>{props.qty}</p>
            <p className={waiter.orderName}>{props.name}</p>
            <p className={waiter.orderPrice}>${props.price}</p>
        </>
    )
}