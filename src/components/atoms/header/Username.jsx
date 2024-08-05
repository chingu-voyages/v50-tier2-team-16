import { useUser } from "@/contexts/UserContext";

const Username = () => {
  const { user } = useUser();

  const message = user ? `WELCOME ${user.username}` : "";

  return <h1 className="text-white font-bold text-2xl">{message}</h1>;
};

export default Username;
