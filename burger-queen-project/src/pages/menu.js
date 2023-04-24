import { HeaderMenu } from "../components/menu/headerMenu";
import { NavigationMenu } from "../components/menu/navigationMenu";
import { BoXBurgerDance } from "../components/menu/boxBurgerDance";
import { BoXOrder } from "../components/menu/boxOrder";
import { BoxCategoriesMenuFood } from "../components/menu/boxCategoriesMenuFood";
import { BoxProcess } from "../components/menu/boxProcess";

export default function MenuPage() {
    return (<div>
        <HeaderMenu />
        <NavigationMenu />
        <BoXBurgerDance />
        <BoXOrder />
        <BoxCategoriesMenuFood />
        <BoxProcess />
    </div>
    )
}