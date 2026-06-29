import ChangeTheme from "./components/ChangeTheme";
import Divider from "./components/Divider";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";

const Topbar = () => {
  return (
    <div className="p-3.5 border-b border-color dark:border-none flex items-center justify-between dark:bg-dark-primary">
      <div className="flex items-center gap-4">
        <SearchInput />
        <ChangeTheme />
      </div>
      <div className="flex items-center gap-2">
        <Notifications />
        <Divider />
        <Profile />
      </div>
    </div>
  );
};

export default Topbar;
