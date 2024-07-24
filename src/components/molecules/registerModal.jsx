import { useState } from "react";
import { useUser } from "../../contexts/UserContext";

function RegisterModal({ isOpen, handleClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useUser();

  const inputStyles =
    "mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-500";

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    register(username, password);
    handleClose();
  };

  return (
    isOpen && (
      <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full bg-black bg-opacity-25 z-30">
        <div className="relative flex justify-center items-center h-1/2 w-3/5 bg-slate-600">
          <button
            className="absolute top-0 right-2 text-white text-2xl"
            onClick={handleClose}
          >
            X
          </button>
          <form target="" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name" className="text-white">
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

            <label htmlFor="password" className="text-white">
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
              className="mt-5 rounded-lg bg-white px-10 py-3 "
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
