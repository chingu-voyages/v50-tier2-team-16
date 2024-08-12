import { useUser } from "@/contexts/UserContext";

const UserBalance = () => {
  const { user } = useUser();

  const balance = user ? `${user.balance.toLocaleString()}` : 0;
  const message = `Current balance`;

  return (
    <div className="m-2 p-2">
      <p>
        <span className="font-bold">{message}</span> : $ {balance}
      </p>
    </div>
  );
};

export default UserBalance;
