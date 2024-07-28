import { useUser } from "@/contexts/UserContext";

import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import RegisterButton from "./Auth/RegisterButton";
import { HeaderDrawer } from "../molecules/Header.drawer";
import Logo from "../atoms/header/Logo";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 bg-header-color bg-opacity-70">
      <Logo />

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
