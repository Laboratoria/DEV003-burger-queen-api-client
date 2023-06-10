import { TokenContextProvider } from "./components_waiter/tokenContext";
import { KitchenContextProvider } from "./components_kitchen/kitchenContext";
import { UserContextProvider } from "./components_login/userContext";
import { AllOrder } from "./components_kitchen/renderAll";

export default function Kitchen() {
   
   return (
    <>
    <UserContextProvider>
    <TokenContextProvider>
      <KitchenContextProvider>
        <div>
         <AllOrder/>   
        </div>
      </KitchenContextProvider>
    </TokenContextProvider>
    </UserContextProvider>
    </>
   )
}