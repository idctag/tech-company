import { Separator } from "../ui/separator";
import DesktopNav from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const NavBar = () => {
  return (
    <nav>
      <DesktopNav />
      <MobileNav />
      <Separator />
    </nav>
  );
};

export default NavBar;
