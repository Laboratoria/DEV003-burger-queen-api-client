import { HeaderMenu } from "../components/menu/headerMenu";
import { NavigationMenu } from "../components/menu/navigationMenu";
import { BoXOrder } from "../components/menu/boxOrder";
import { BoxCategoriesMenuFood } from "../components/menu/boxCategoriesMenuFood";
import { BoxProcess } from "../components/menu/boxProcess";

export default function MenuFoodPage() {
    return (<div>
        <HeaderMenu />
        <NavigationMenu />
        <BoxCategoriesMenuFood />
        <BoXOrder />
        <BoxProcess />
    </div>
    )
}