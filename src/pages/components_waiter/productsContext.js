import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ProductsContext = createContext()
// const token = localStorage.getItem('userToken')
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4NDgxNTk1NCwiZXhwIjoxNjg0ODE5NTU0LCJzdWIiOiIzIn0.FSnGPgilgY_-Lw5bPRvWljH746dS6tMzOn9keAs9EU0"
export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])

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