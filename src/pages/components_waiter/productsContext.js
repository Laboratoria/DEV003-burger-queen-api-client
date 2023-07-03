import {useState, useEffect, createContext, useContext} from 'react'
import { TokenContext } from './tokenContext'
import axios from 'axios'

export const ProductsContext = createContext()

export const ProductContextProvider = ({children}) => {
    
    const [products, setProducts] = useState([])
    const {loginData} = useContext(TokenContext)
    
    const token = loginData.token
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/products', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setProducts(response.data);
          } catch (error) {
            console.log(error);
          }
        };
      
        if (token) {
          getData();
        }
      }, [token]);
   
    return (
        <ProductsContext.Provider value={products}>
           {children}
        </ProductsContext.Provider>
         
    )
}