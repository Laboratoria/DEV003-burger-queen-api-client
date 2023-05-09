import { createContext, useState } from "react";

export const ContextOrder = createContext();

export const OrderProvider = ({children}) => {
    const [order, setOrder] = useState([]);

    return(
        <ContextOrder.Provider value={[order, setOrder]}>
            {children}
        </ContextOrder.Provider>
    )
}

