import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    if (!localStorage.getItem('users')) {
        console.log('here')
        const newUserList = [{ id: 0, username: 'startup', password: 'startpass', balance: 0, order: [] }];
        localStorage.setItem('users', JSON.stringify(newUserList));
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const register = (username, password) => {
        const newUser = { username, password, balance: 0 };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    const login = (username) => {
        const newUser = { username, balance: 100 };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    //function for updating balance in json file;
    const updateBalance = (amount) => {
        const updatedUser = { ...user, balance: parseInt(user.balance) + parseInt(amount) };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));

    };


    return (
        <UserContext.Provider value={{ useUser, user, register, login, logout, updateBalance }}>
            {children}
        </UserContext.Provider>
    );

}