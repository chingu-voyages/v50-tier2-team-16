import { useState } from "react";
import NavButton from "../../atoms/Button.nav";
import LoginModal from "../../molecules/loginModal";

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <NavButton onClick={handleLogin}>Login</NavButton>
      <LoginModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default LoginButton;
