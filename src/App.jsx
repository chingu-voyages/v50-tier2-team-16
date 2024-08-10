import { useState } from "react";
import "./App.css";
import Map from "./components/organisms/map";
import { UserProvider } from "./contexts/UserContext";
import Filter from "./components/organisms/Filter";
import { FilterProvider } from "./contexts/FilterContext";
import MenuResults from "./components/API/MenuResults";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="flex flex-col justify-center w-full px-2 mx-auto max-w-[1920px]">
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
    </div>
  );
}

export default App;
