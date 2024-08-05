import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import CloseIcon from '@mui/icons-material/Close';

function RegisterModal({ isOpen, handleClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useUser();

  const inputStyles =
    "mt-3 w-full rounded-lg bg-white px-5 py-3 placeholder-gray-500";

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register(username, password);
    handleClose();
  };

  return (
    isOpen && (
      <div className="absolute top-0 left-0 flex justify-center items-center h-[100vh] w-full bg-black bg-opacity-25 z-30">
        <div className="relative flex justify-center items-center h-1/2 bg-app-yellow">
          <button
            className="absolute top-0 right-2 text-black text-2xl"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
          <form target="" onSubmit={handleRegisterSubmit} className="my-2 mx-5 p-2">
            <label htmlFor="name" className="text-black my-2">
              Create a username:{" "}
            </label>
            <input
              id="name"
              className={inputStyles}
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password" className="text-black my-5">
              Create a password:{" "}
            </label>
            <input
              id="password"
              className={inputStyles}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="min-w-24 h-12 my-4 py-2 text-white font-bold border-b-4 border-blue-500 bg-header-navButton hover:bg-header-navButton-hover rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default RegisterModal;
