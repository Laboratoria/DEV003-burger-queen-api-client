import { createContext, useState, useEffect, useContext } from "react"
import { UserContext } from "../components_login/userContext"
import jwt from "jsonwebtoken"
import axios from "axios"

export const TokenContext = createContext()

export const TokenContextProvider = ({children}) => {

  const {user} = useContext(UserContext)

    const [loginData, setLoginData] = useState({
      token: '',
      userId: ''
    })

    const accessToken = localStorage.getItem('userToken');
    const decodedToken = jwt.decode(accessToken)

    useEffect(() => {

    const storedToken = localStorage.getItem('userToken');
    const storedUserId = localStorage.getItem('userId');

      setLoginData({
        token: storedToken ?? '', 
        userId: storedUserId ?? ''
      });  
      
    }, [])

      if (decodedToken) {
        const currentTime = new Date();
        const expirationDate = new Date(decodedToken.exp * 1000);  
        
        const timeRemaining = expirationDate - currentTime;

        const refreshToken = async () => {
          const response = await axios.post('http://localhost:8080/login', {"email":user.user, "password":user.password})
          setLoginData({
           token: response.data.accessToken,
           userId: response.data.user.id
          })
        }
 
      setTimeout(refreshToken, timeRemaining - 1000);
  
      }
      
   return (
        <TokenContext.Provider value={[loginData, setLoginData]}>
          {children}
        </TokenContext.Provider>
    )
}