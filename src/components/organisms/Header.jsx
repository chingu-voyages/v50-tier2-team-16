import { useUser } from "@/contexts/UserContext";

import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import RegisterButton from "./Auth/RegisterButton";
import { HeaderDrawer } from "../molecules/Header.drawer";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="w-full flex items-center justify-between gap-4 z-50">
      <h1>LOGO</h1>

      {!user && (
        <div className="flex">
          <RegisterButton />
          <LoginButton />
          <HeaderDrawer />
        </div>
      )}

      {user && (
        <div className="flex">
          <LogoutButton />
          <HeaderDrawer />
        </div>
      )}
    </div>
  );
};

export default Header;
