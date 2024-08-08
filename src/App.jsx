import { useState } from "react";
import "./App.css";
import Map from "./components/organisms/map";
import { UserProvider } from "./contexts/UserContext";
import OrderList from "./components/Order";
import Filter from "./components/organisms/Filter";
import { FilterProvider } from "./contexts/FilterContext";
import MenuResults from "./components/API/MenuResults";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <UserProvider>
        <FilterProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <Filter />
          <Map />
          <MenuResults />
          <Footer />
        </FilterProvider>
      </UserProvider>
    </>
  );
}

export default App;
