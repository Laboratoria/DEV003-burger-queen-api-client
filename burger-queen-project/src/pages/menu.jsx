import { HeaderMenu } from '../components/menu/headerMenu' 
import { NavigationMenu } from "../components/menu/navigationMenu";
import { BoXBurgerDance } from "../components/menu/boxBurgerDance";
import { BoxOrder } from "../components/menu/boxOrder";
import { BtnProcessOrder } from "../components/menu/btnProcessOrder";
import { OrderProvider } from "@/components/menu/contextOrder";

export default function MenuPage() {
    return (<div>
        <NavigationMenu />
        <BoXBurgerDance />
        <OrderProvider>
        <BoxOrder />
        </OrderProvider>
        <BtnProcessOrder />
    </div>
    )
}