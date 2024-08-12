import { GiHamburgerMenu } from "react-icons/gi";
import { useUser } from "../../../contexts/UserContext";

const Hamburger = () => {

  const { user } = useUser();

  const totalItems = user.order.reduce(
    (sum, value) => sum + value.qty,
    0
  );

  return (
    <div className="relative">
      <GiHamburgerMenu className="h-6 w-6 ml-2 text-white" />
      <div className={(user.order.length > 0 ? 'absolute rounded-full bg-red-500 text-white flex justify-center items-center text-sm w-5 h-5 top-2/4 left-5 scale-100 ' : 'absolute rounded-full opacity-0 scale-0 ') + 'transition-all duration-200'}>
        {totalItems}
      </div>
    </div>
  );
};

export default Hamburger;
