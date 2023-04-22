import { HeaderMenu } from "./components/headerMenu";
import { NavigationMenu } from "./components/navigationMenu";
import { BoXBurgerDance } from "./components/boxBurgerDance";
import { BoXOrder } from "./components/boxOrder";
import { BoxCategoriesMenuFood } from "./components/boxCategoriesMenuFood";
import { BoxProcess } from "./components/boxProcess";

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