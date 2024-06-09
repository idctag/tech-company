import { Separator } from "../ui/separator";
import DesktopNav from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-transparent">
      <DesktopNav />
      <MobileNav />
      <Separator />
    </nav>
  );
};

export default NavBar;
