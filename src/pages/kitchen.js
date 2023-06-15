import { KitchenContextProvider } from "./components_kitchen/kitchenContext";
import { AllOrder } from "./components_kitchen/renderAll";
import style from './styles/Kitchen.module.css'

export default function Kitchen() {
   
   return (
    <>
      <KitchenContextProvider>
        <main className={style.kitchenMain} >
          <img src="/kitchen.jpg" className={style.kitchenbkg}/>
         <AllOrder/>   
        </main>
      </KitchenContextProvider>
    </>
   )
}