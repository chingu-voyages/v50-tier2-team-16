import Map from "./components/organisms/map";
import UserDashboard from "./components/molecules/userDashboard";
import { UserProvider } from "./contexts/UserContext";
import Menu from "./components/MenuAPI";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
      <UserProvider>
        <UserDashboard />
        <Map />
        <Menu />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
