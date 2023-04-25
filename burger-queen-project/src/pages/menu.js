import { HeaderMenu } from "../components/menu/headerMenu";
import { NavigationMenu } from "../components/menu/navigationMenu";
import { BoXBurgerDance } from "../components/menu/boxBurgerDance";
import { BoXOrder } from "../components/menu/boxOrder";
import { BoxProcess } from "../components/menu/boxProcess";
// import { AllFood } from "../components/menu/all-food";

export default function MenuPage() {
    return (<div>
        <HeaderMenu />
        <NavigationMenu />
        <BoXBurgerDance />
        <BoXOrder />
        <BoxProcess />
    </div>
    )
}