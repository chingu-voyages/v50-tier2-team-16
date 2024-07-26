import Map from "./components/organisms/map";
import UserDashboard from "./components/organisms/userDashboard";
import { UserProvider } from "./contexts/UserContext";
import Menu from "./components/MenuAPI";
import Footer from "./components/organisms/Footer";
import { DrawerDemo } from "./components/molecules/Header.drawer";

function App() {
  return (
    <>
      <UserProvider>
        <DrawerDemo />
        <UserDashboard />
        <Map />
        <Menu />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
