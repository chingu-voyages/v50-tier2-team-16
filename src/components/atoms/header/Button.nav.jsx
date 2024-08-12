const NavButton = ({ children, onClick }) => {
  return (
    <button
      className="min-w-24 h-12 m-2 p-2 text-white font-bold border-b-4 border-blue-500 bg-header-navButton hover:bg-header-navButton-hover rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;
