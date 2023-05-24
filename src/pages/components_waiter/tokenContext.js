import { createContext, useState, useEffect } from "react"

export const TokenContext = createContext()

export const TokenContextProvider = ({children}) => {

    const [loginData, setLoginData] = useState({
        token: '',
        userId: ''
    })
    
    useEffect(() => {

      setLoginData({
        token: loginData.token = localStorage.getItem('userToken') ?? undefined ,
        userId: loginData.userId = localStorage.getItem('userId') ?? undefined
    })  
    }, [])

    return (
        <TokenContext.Provider value={[loginData, setLoginData]}>
          {children}
        </TokenContext.Provider>
    )
}