import { createContext, useState, useEffect } from "react"

export const TokenContext = createContext()

export const TokenContextProvider = ({children}) => {

    const [loginData, setLoginData] = useState({
      token: '',
      userId: ''
    })
    
    useEffect(() => {

    const storedToken = localStorage.getItem('userToken');
    const storedUserId = localStorage.getItem('userId');

      setLoginData({
        token: storedToken ?? '', 
        userId: storedUserId ?? ''
      });   
    }, [])
     
   return (
        <TokenContext.Provider value={[loginData, setLoginData]}>
          {children}
        </TokenContext.Provider>
    )
}