import { useState } from "react";
import "./App.css";
import Map from "./components/organisms/map";
import UserDashboard from "./components/organisms/userDashboard";
import { UserProvider } from "./contexts/UserContext";
import OrderList from "./components/Order";
import Filter from "./components/organisms/Filter";
import { FilterProvider } from "./contexts/FilterContext";
import MenuResults from "./components/API/MenuResults";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

function App() {

  return (
    <>

      <div className="app-container">
        <div className="app-left">
          <UserProvider>
            <FilterProvider>
              <Header />
              <UserDashboard />
              <Filter />
              <Map />
              <MenuResults />
              <Footer />
            </FilterProvider>
          </UserProvider>
        </div>
        <OrderList />
      </div>

    </>
  );
}

export default App;
