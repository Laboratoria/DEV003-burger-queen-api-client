import { KitchenContextProvider } from "./components_kitchen/kitchenContext";
import { AllOrder } from "./components_kitchen/renderAll";

export default function Kitchen() {
   
   return (
    <>
      <KitchenContextProvider>
        <div>
         <AllOrder/>   
        </div>
      </KitchenContextProvider>
    </>
   )
}