import {useState, useEffect, createContext, useContext} from 'react'
import { TokenContext } from './tokenContext'
import axios from 'axios'

export const ProductsContext = createContext()
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4NDg5NjczNSwiZXhwIjoxNjg0OTAwMzM1LCJzdWIiOiIzIn0.MTEpXAhAMcLi1FeqAeMYrYC7REViLoBeY9AeVmpIeCY"
export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    const loginData = useContext(TokenContext)
    const accesToken = loginData.token

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