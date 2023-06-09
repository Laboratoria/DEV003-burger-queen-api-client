import { TokenContext } from "../components_waiter/tokenContext";
import { useState, useEffect, createContext ,useContext } from "react";
import axios from "axios";

export const KitchenContext = createContext();

export function KitchenContextProvider({children}) {
    const [orderData, setOrderData] = useState([])
    const [loginData] = useContext(TokenContext)
    const token = loginData.token

    useEffect(() => {

        const getOrderData = async () => {
            try {
              const response = await axios.get('http://localhost:8080/orders', {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              setOrderData(response.data);
            } catch (error) {
              console.log(error);
            }
          };
        
          if (token) {
            getOrderData();
          }
    }, [token]) 

 
    return (
        <KitchenContext.Provider value={orderData}>
            {children}
        </KitchenContext.Provider>
    )
}