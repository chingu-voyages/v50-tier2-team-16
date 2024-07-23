import { useUser } from "../../contexts/UserContext";
import AddCurrency from "../atoms/addCurrency";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import RegisterButton from "./Auth/RegisterButton";

function UserDashboard() {
  const { user } = useUser();

  return (
    <div className="m-2 w-5/6 border-black black border-2">
      {!user && (
        <div>
          <RegisterButton />
          <LoginButton />
        </div>
      )}

      {user && (
        <div>
          <LogoutButton />
          <AddCurrency />
          <p>Current user: {!user ? "none" : user.username} </p>
          <p>Current balance: {!user ? 0 : user.balance} </p>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
