import Map from "./components/organisms/map";
import UserDashboard from "./components/molecules/userDashboard";
import LocationFilter from "./components/organisms/LocationFilter";
import { UserProvider } from "./contexts/UserContext";
import { LocationProvider } from "./contexts/LocationContext";
import MenuResults from "./components/API/MenuResults";
import Footer from "./components/organisms/Footer";


function App() {
  return (
    <>
      <UserProvider>
      <LocationProvider>
        <UserDashboard />
        <LocationFilter />
        <Map />
        <MenuResults />
        <Footer />
      </LocationProvider>
      </UserProvider>
    </>
  );
}

export default App;
