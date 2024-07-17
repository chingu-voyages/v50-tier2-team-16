import Map from "./components/organisms/map";
import UserDashboard from "./components/molecules/userDashboard";
import { UserProvider } from "./contexts/UserContext";
import Menu from './components/MenuAPI'


function App() {

  return (
    <>
      <UserProvider>
        <UserDashboard />
        <Map />
        <Menu />
      </UserProvider>
    </>
  )
}

export default App;