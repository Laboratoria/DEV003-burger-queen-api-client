import { TokenContextProvider } from "./components_waiter/tokenContext";
import { KitchenContextProvider } from "./components_kitchen/kitchenContext";
import { AllOrder } from "./components_kitchen/renderAll";

export default function Kitchen() {
   
   return (
    <>
    <TokenContextProvider>
      <KitchenContextProvider>
        <div>
         <AllOrder/>   
        </div>
      </KitchenContextProvider>
    </TokenContextProvider>
    </>
   )
}