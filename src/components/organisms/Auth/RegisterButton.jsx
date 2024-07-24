import { useState } from "react";
import NavButton from "../../atoms/Button.nav";
import RegisterModal from "../../molecules/registerModal";

const RegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <NavButton onClick={handleLogin}>Register</NavButton>
      <RegisterModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default RegisterButton;
