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
  if (!localStorage.getItem("userList")) {
    localStorage.setItem("userList", JSON.stringify(userList));
  }

  //if user was logged in last session, use them as active account
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser(storedUser);
    }

    const storedUserList = JSON.parse(localStorage.getItem("userList"));
    if (storedUserList) {
      setUserList(storedUserList);
    }
  }, []);

  const register = (username, password) => {
    let userNameIsTaken = userList.find((u) => u.username === username);

    if (!userNameIsTaken) {
      let newUser = {
        id: uuid(),
        username: username,
        password: password,
        balance: 0,
        order: [],
      };
      setUserList([...userList, newUser]);
      localStorage.setItem("userList", JSON.stringify([...userList, newUser]));
      setUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      alert("username already taken");
    }
  };

  const login = (username, password) => {
    let isValidCredentials = userList.find(
      (u) => u.username === username && u.password === password
    );

    if (isValidCredentials) {
      setUser(isValidCredentials);
      localStorage.setItem("currentUser", JSON.stringify(isValidCredentials));
    } else {
      alert("login failed, please try again");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("currentUser", null);
  };

  const updateUserinLocalStorage = (userToUpdate) => {
    let userListUpdateIndex = userList.findIndex((u) => u.id === user.id);
    let newUserList = userList;
    newUserList[userListUpdateIndex] = userToUpdate;
    setUser(userToUpdate);
    localStorage.setItem("currentUser", JSON.stringify(userToUpdate));
    setUserList(newUserList);
    localStorage.setItem("userList", JSON.stringify(newUserList));
  };

  //function for updating balance in json file;
  const updateBalance = (amount) => {
    const updatedUser = {
      ...user,
      balance: parseInt(user.balance) + parseInt(amount),
    };
    updateUserinLocalStorage(updatedUser);
  };

  const updateOrder = (newOrder) => {
    const updatedUser = { ...user, order: [...user.order, newOrder] };
    updateUserinLocalStorage(updatedUser);
  };

  const incrementOrder = (item) => {

    let itemToUpdateIndex = user.order.findIndex((u) => u.id === item.id);
    let newOrder = user.order;
    newOrder[itemToUpdateIndex] = { ...item, qty: item.qty + 1 };

    const updatedUser = { ...user, order: newOrder };
    updateUserinLocalStorage(updatedUser);

  };

  const decrementOrder = (item) => {

    if (item.qty === 1) {
      removeSpecificItem(item);
    } else {
      let itemToUpdateIndex = user.order.findIndex((u) => u.id === item.id);
      let newOrder = user.order;
      newOrder[itemToUpdateIndex] = { ...item, qty: item.qty - 1 };

      const updatedUser = { ...user, order: newOrder };
      updateUserinLocalStorage(updatedUser);
    }
  };

  const removeSpecificItem = (item) => {

    console.log("Oh no here")
    const newOrder = user.order.filter((o) => o.id !== item.id);

    const updatedUser = { ...user, order: newOrder };
    updateUserinLocalStorage(updatedUser);
  }

  const clearOrder = () => {
    const updatedUser = { ...user, order: [] };
    updateUserinLocalStorage(updatedUser);
  };

  return (
    <UserContext.Provider
      value={{
        setUser,
        useUser,
        user,
        register,
        login,
        logout,
        updateBalance,
        updateOrder,
        clearOrder,
        incrementOrder,
        decrementOrder,
        removeSpecificItem,
        updateUserinLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
