import { HeaderMenu } from "../components/menu/headerMenu";
import { NavigationMenu } from "../components/menu/navigationMenu";
import { BoXOrder } from "../components/menu/boxOrder";
// import { BoxCategoriesMenuFood } from "../components/menu/boxCategoriesMenuFood";
import { BoxProcess } from "../components/menu/boxProcess";
import { AllFood } from "@/components/menu/all-food";

export default function MenuFoodPage() {
    return (<div>
        <NavigationMenu />
        <AllFood title="Desayuno"/>
        <BoxProcess />
    </div>
    )
}