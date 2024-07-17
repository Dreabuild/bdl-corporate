const Navbar = () => {
  return (
    <header className="max-w-[1400px] px-4 w-full mx-auto py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src="https://i.ibb.co/S5cZpQr/Bloodlink-Assests-1.png"
            alt="logo"
            className="h-8 lg:h-12"
          />
        </a>
        <div className="flex gap-x-4 items-center">
          <a
            href="/"
            className="bg-none text-[#000] text-[18px] lg:text-[20px]"
          >
            হোম
          </a>
          <a
            href="https://bloodlink.app/"
            target="_blank"
            className="bg-[#BF0000] text-[#fff] text-[18px] lg:text-[20px] px-4 py-2"
          >
            রক্তের আবেদন
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
