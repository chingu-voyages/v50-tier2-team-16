import AddCurrency from "@/components/atoms/drawer/AddCurrency";
import UserBalance from "@/components/atoms/drawer/UserBalance";

const UserAccount = () => {
  return (
    <div className="flex flex-col">
      <AddCurrency />
      <UserBalance />
    </div>
  );
};

export default UserAccount;
