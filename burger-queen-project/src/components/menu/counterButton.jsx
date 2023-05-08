import { useContext } from "react";
import style from "../../styles/viewAllFood.module.css";
import { ContextOrder } from "./contextOrder";



export const CounterButton = (props /*setValue, valsue, counter, data, addItem*/ ) => {
    // console.log(props)
    let [order, setOrder] = useContext(ContextOrder);
    // const { id } = props;
    // useEffect(() =>{
    //     console.log(id);
    //     console.log(value)
    // })

    //     let [count, setCount] = useState(0);

    // const counterAdd = () => { setCount (c => c + 1)};
    // const counterLess = () => { count <= 0 ? count = 0: setCount (c => c - 1) };
    // const handleOrder = (e) => {
    //     setValue(e.target.value);
    //     const newCounter = {...data};
    //     newCounter.counter = counterAdd();
    //     console.log(count);
    //     console.log('contador btn', counter);
    //     console.log(newCounter)
    // };

    const addItem = () => {
        // const equalId = data.find(element => element.id === item.id);
        // if(equalId){
        //     const updatedItem ={...item, counter:1};
        //     setDataFilter((prevState) => [
        //     ...prevState,
        //     updatedItem
        //     ]);
        // }
        // console.log(newDataFilter);
        const takeOrder = [{
            name: props.name,
            id: props.id,
            price: props.price,
            counter: 1,
        }]

        console.log(order.concat(takeOrder))
        setOrder(takeOrder)
       
    }
    return (
        <div>
            <div className={style.img}>
                <img className={style.product} src={props.img} alt="Productos" />
            </div>
            <p className={style.p}>${props.price}</p>
            <h3 className={style.h3}>{props.name}</h3>
            <button className={style.btnAdd} onClick={() => { /*e.preventDefault(); counterLess(); handleOrder(e); addItem(data)*/ }}>-</button>
            <div className={style.counter}><p></p></div>
            <button className={style.btnAdd} onClick={addItem}>+</button>
        </div>

    )
}