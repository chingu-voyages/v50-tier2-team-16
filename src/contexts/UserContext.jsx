import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {

    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState(null);

    //initialize user list in localStorage
    if (!localStorage.getItem('userList')) {
        const newUserList = [{ id: 0, username: "startup", password: "startpass", balance: 0, order: [] }];
        setUserList([...userList, newUser]);
        localStorage.setItem('userList', JSON.stringify(newUserList));
    };

    //if user was logged in last session, use them as active account
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const register = (username, password) => {

        let userNameIsTaken = userList.find(u => u.username === username);

        if (!userNameIsTaken) {
            const newUser = { "id": uuid(), "username": username, "password": password, "balance": 0, "order": [] };
            setUserList([...userList, newUser]);
            localStorage.setItem('userList', JSON.stringify([...userList, newUser]));
            setUser(newUser);
            localStorage.setItem('currentUser', JSON.stringify(newUser));
        } else {
            alert("username already taken");
        }

    }

    const login = (username) => {
        const newUser = { username, balance: 100 };
        setUser(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };

    //function for updating balance in json file;
    const updateBalance = (amount) => {
        const updatedUser = { ...user, balance: parseInt(user.balance) + parseInt(amount) };
        setUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    };


    return (
        <UserContext.Provider value={{ useUser, user, register, login, logout, updateBalance }}>
            {children}
        </UserContext.Provider>
    );

}