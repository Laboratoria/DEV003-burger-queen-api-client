import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { TokenContext } from "../components_waiter/tokenContext";

/*
Obtener lor productos (Products context) y los usuarios (consultahttp)
*/
const AdminContext = createContext();

export default function AdminContextProvider({children}) {

    const {loginData} = useContext(TokenContext);

    const [usersData, setUsersData] = useState([]);
    const token = loginData.token;

    useEffect(() => {{
        axios.get("http://localhost:8080/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => setUsersData(res))
        .catch(err => console.error(err))
    }}, [token])

    return (
      <AdminContext.Provider value={usersData} >
        {children}
      </AdminContext.Provider>
    )
}
