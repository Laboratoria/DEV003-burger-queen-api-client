import {useState, useEffect, createContext, useContext} from 'react'
import { TokenContext } from './tokenContext'
import axios from 'axios'

export const ProductsContext = createContext()

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    const [loginData] = useContext(TokenContext)
    
    const token = loginData.token

    useEffect(() => {

        axios.get('http://localhost:8080/products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setProducts(response.data)
        })
        .catch(console.log)
    }, [])

    return (
        <ProductsContext.Provider value={products}>
           {children}
        </ProductsContext.Provider>
         
    )
}