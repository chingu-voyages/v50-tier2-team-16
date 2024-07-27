import { useUser } from "../../../contexts/UserContext";
import NavButton from "../../atoms/header/Button.nav";

const LogoutButton = () => {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <NavButton onClick={handleLogout}>Logout</NavButton>
    </div>
  );
};

export default LogoutButton;
