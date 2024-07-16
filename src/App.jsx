import { useState } from "react";
import Map from "./components/organisms/map";
import LoginButton from "./components/atoms/loginButton";
import LogoutButton from "./components/atoms/logoutButton";
import AddCurrency from "./components/atoms/addCurrency";
import { UserProvider } from "./contexts/UserContext";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  // Place organisms such as the header and footer.
  return (
    <>
      <UserProvider>
        <div className="relative">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-xl text-white bg-black">Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <LoginButton />
        <LogoutButton />
        <AddCurrency />

        <Map />
      </UserProvider>
    </>
  );
}

export default App;
