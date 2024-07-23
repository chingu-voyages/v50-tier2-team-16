const NavButton = ({ children, onClick }) => {
  return (
    <button
      className="min-w-15 h-10 m-2 p-2 bg-slate-200 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;
