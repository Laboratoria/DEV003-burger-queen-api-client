import { useState, createContext } from "react";

export const UserContext = createContext()

export function UserContextProvider ({children}) {

    const [user, setUser] = useState({
        user: '',
        password: ''
    })

    const updateUser = (user, password) => {
        setUser({
            user,
            password
        })
    }

    return (
        <>
        <UserContext.Provider value={{user, updateUser}}>
        {children}
        </UserContext.Provider>
        </>
    )
}