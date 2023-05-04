import { HeaderMenu } from "../components/menu/headerMenu";
import { NavigationMenu } from "../components/menu/navigationMenu";
// import { BoxCategoriesMenuFood } from "../components/menu/boxCategoriesMenuFood";
import { ViewAllFood } from "../components/menu/viewAllFood";

export default function MenuFoodPage() {
    return (<div>
        <NavigationMenu />
        <ViewAllFood title="Desayuno"/>
    </div>
    )
}