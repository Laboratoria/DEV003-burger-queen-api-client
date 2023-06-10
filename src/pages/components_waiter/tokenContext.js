import { createContext, useState, useEffect, useContext } from "react"
import jwt from "jsonwebtoken"
import axios from "axios"

export const TokenContext = createContext()

export const TokenContextProvider = ({children}) => {

    const [loginData, setLoginData] = useState({
      token: '',
      userId: '',
    })
    const [userData, setUserData] = useState({
      usermail: '',
      userpassword: ''
    })

    useEffect(() => {

    const storedToken = localStorage.getItem('userToken');
    const storedUserId = localStorage.getItem('userId');

      setLoginData({
        token: storedToken , 
        userId: storedUserId 
      });  

      const accessToken = localStorage.getItem('userToken');
      const decodedToken = jwt.decode(accessToken)

      if (decodedToken) {
        const currentTime = new Date();
        const expirationDate = new Date(decodedToken.exp * 1000);  
        
        const timeRemaining = expirationDate - currentTime;

        const refreshToken = async () => {
          const response = await axios.post('http://localhost:8080/login', {"email":userData.usermail, "password": userData.userpassword})
          setLoginData({
           token: response.data.accessToken,
           userId: response.data.user.id
          })
        }
 
      setTimeout(refreshToken, timeRemaining - 1000);
  
      }
      
    }, [])
    
   return (
        <TokenContext.Provider value={{loginData, setLoginData, userData, setUserData}}>
          {children}
        </TokenContext.Provider>
    )
}