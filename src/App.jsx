import Map from "./components/organisms/map";
import UserDashboard from "./components/molecules/userDashboard";
import { UserProvider } from "./contexts/UserContext";


function App() {

  // Place organisms such as the header and footer.
  return (
    <>
      <UserProvider>
        <UserDashboard />
        <Map />
      </UserProvider>
    </>
  );
}

export default App;
