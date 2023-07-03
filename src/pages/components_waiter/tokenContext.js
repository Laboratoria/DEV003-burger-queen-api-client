import { createContext, useState, useEffect} from "react"

export const TokenContext = createContext()

export const TokenContextProvider = ({children}) => {

    const [loginData, setLoginData] = useState({
      token: '',
      userId: '',
    })
    
    useEffect(() => {
      // Cargar token desde el almacenamiento local al cargar la página
      const storedToken = localStorage.getItem('token');
      const storedUserId = localStorage.getItem('userId');
  
      if (storedToken && storedUserId) {
        setLoginData({
          token: storedToken,
          userId: storedUserId,
        });
      }
    }, []);
  
    useEffect(() => {
      // Guardar token en el almacenamiento local cuando cambie
      localStorage.setItem('token', loginData.token);
      localStorage.setItem('userId', loginData.userId);
      
    }, [loginData.token, loginData.userId]);

   return (
        <TokenContext.Provider value={{loginData, setLoginData}}>
          {children}
        </TokenContext.Provider>
    )
}