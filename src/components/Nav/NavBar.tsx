import { ModeToggle } from "../ui/theme-switcher";
import { MainNav } from "./MainNav";
import { SessionLinks } from "./SessionLinks";

export const NavBar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-4" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <SessionLinks />
        </div>
      </div>
    </div>
  );
};
