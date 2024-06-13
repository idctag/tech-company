import DesktopNav from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-gradient-custom z-50">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default NavBar;
