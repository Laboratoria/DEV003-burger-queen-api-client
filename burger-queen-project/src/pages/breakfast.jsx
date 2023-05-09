import { HeaderMenu } from '../components/menu/headerMenu' 
import { NavigationMenu } from "../components/menu/navigationMenu";
import { ViewAllFood } from "../components/menu/viewAllFood";
import { OrderProvider } from "../components/menu/contextOrder";

export default function MenuFoodPage() {
    return (<div>
        <NavigationMenu />
        <OrderProvider>
        <ViewAllFood type="Desayuno"/>
        </OrderProvider>
    </div>
    )
}