import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/organisms/map";
import UserDashboard from "./components/organisms/userDashboard";
import { UserProvider } from "./contexts/UserContext";
import Menu from "./components/MenuAPI";
import OrderList from "./components/Order";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

function App() {
  const [order, setOrder] = useState([]);

  return (
    <>
      <div className="app-container">
        <div className="app-left">
          <UserProvider>
            <Header />
            <div className="pt-44 sm:pt-28">
              <UserDashboard />
              <Map />
              <Menu order={order} setOrder={setOrder} />
              <Footer />
            </div>
          </UserProvider>
        </div>
        <OrderList order={order} setOrder={setOrder} />
      </div>
    </>
  );
}

export default App;
