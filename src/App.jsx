import React, { useState, useEffect } from 'react'
import './App.css'
import Map from "./components/organisms/map";
import UserDashboard from "./components/molecules/userDashboard";
import { UserProvider } from "./contexts/UserContext";
import Menu from './components/MenuAPI'
import OrderList from './components/Order'


function App() {

  const [ order, setOrder ] = useState([])

  return (
    <>
      <div className="app-container">
        <div className="app-left">
          <UserProvider>
            <UserDashboard />
            <Map />
            <Menu order={order} setOrder={setOrder}/>
          </UserProvider>
        </div>
          <OrderList order={order} setOrder={setOrder}/>
      </div>
    </>
  )
}

export default App;