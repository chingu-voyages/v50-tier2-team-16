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
<<<<<<< HEAD
       <UserProvider>
       <FilterProvider>
      <div className="app-container">
        <div className="app-left">
         
              <Header />
              <div className="pt-44 sm:pt-28">
                <UserDashboard />
                <Filter />
                <Map />
                <MenuResults order={order} setOrder={setOrder} />
                <Footer />
              </div>
            
         
=======
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
>>>>>>> 89efe7fb895619a5c99cefe181c69fc17cdc6eaa
        </div>
        <OrderList />
      </div>
<<<<<<< HEAD
     
      </FilterProvider>
      </UserProvider>
=======
>>>>>>> 89efe7fb895619a5c99cefe181c69fc17cdc6eaa
    </>
  );
}

export default App;
