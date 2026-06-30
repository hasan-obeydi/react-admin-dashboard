const Overlay = ({ setIsMenuOpen }) => {
  return (
    <div
      onClick={() => setIsMenuOpen(false)}
      className="bg-black/60 fixed z-40 h-screen w-screen"
    ></div>
  );
};

export default Overlay;
