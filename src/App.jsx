import Map from "./components/organisms/map";
import UserDashboard from "./components/molecules/userDashboard";
import Filter from "./components/organisms/Filter";
import { UserProvider } from "./contexts/UserContext";
import { FilterProvider } from "./contexts/FilterContext";
import MenuResults from "./components/API/MenuResults";
import Footer from "./components/organisms/Footer";


function App() {
  return (
    <>
      <UserProvider>
      <FilterProvider>
        <UserDashboard />
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
