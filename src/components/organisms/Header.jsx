import { useUser } from "@/contexts/UserContext";

import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import RegisterButton from "./Auth/RegisterButton";
import { HeaderDrawer } from "../molecules/drawer/Header.drawer";
import Logo from "../atoms/header/Logo";
import Username from "../atoms/header/Username";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 bg-header-color bg-opacity-70">
      <Logo />

      {!user && (
        <div className="header-base">
          <Username />
          <RegisterButton />
          <LoginButton />
        </div>
      )}

      {user && (
        <div className="header-base">
          <Username />
          <LogoutButton />
          <HeaderDrawer />
        </div>
      )}
    </div>
  );
};

export default Header;
