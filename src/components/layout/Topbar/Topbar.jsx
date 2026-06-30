import { useState } from "react";

import ChangeTheme from "./components/ChangeTheme";
import Divider from "./components/Divider";
import MenuIcon from "./components/menuIcon";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";

const Topbar = ({ toggleMenu }) => {
  const [isMobileSearchOpen, setIsMoblieSearchOpen] = useState(false);
  return (
    <div className="p-3.5 border-b border-color dark:border-none flex gap-2 items-center justify-between dark:bg-dark-primary">
      <div className="flex items-center md:gap-3 sm:gap-1 gap-3">
        <MenuIcon toggleMenu={toggleMenu} />
        <SearchInput
          isMobileSearchOpen={isMobileSearchOpen}
          setIsMoblieSearchOpen={setIsMoblieSearchOpen}
        />
        {!isMobileSearchOpen && <ChangeTheme />}
      </div>
      {!isMobileSearchOpen && (
        <div className="flex items-center md:gap-2 gap-1">
          <Notifications />
          <Divider />
          <Profile />
        </div>
      )}
    </div>
  );
};

export default Topbar;
