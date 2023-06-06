import { useContext } from "react";
import { KitchenContext } from "./kitchenContext";

export function AllOrder () {
    const value = useContext(KitchenContext)
    return <p>{value}</p>
}