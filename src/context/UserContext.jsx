import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = (username) => {

    };

    const logout = () => {

    };

    //function for updating balance in json file;
    const updateBalance = (amount) => {

    };


    return (
        <UserContext.Provider value={{ user, login, logout, updateBalance }}>
            {children}
        </UserContext.Provider>
    );

}