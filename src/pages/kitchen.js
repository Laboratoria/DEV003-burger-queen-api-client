import { KitchenContextProvider } from "./components_kitchen/kitchenContext";
import { AllOrder } from "./components_kitchen/renderAll";
import style from './styles/Kitchen.module.css'

export default function Kitchen() {
   
   return (
    <>
      <KitchenContextProvider>
        <main className={style.kitchenMain} >
         <AllOrder/>   
        </main>
      </KitchenContextProvider>
    </>
   )
}