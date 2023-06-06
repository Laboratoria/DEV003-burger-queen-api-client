import { TokenContext } from "../components_waiter/tokenContext";
import { useState, useEffect, createContext ,useContext } from "react";
import axios from "axios";

export const KitchenContext = createContext();

export function KitchenContextProvider({children}) {
    return (
        <KitchenContext.Provider value={555}>
            {children}
        </KitchenContext.Provider>
    )
}