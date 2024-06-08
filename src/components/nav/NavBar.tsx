import { Separator } from "../ui/separator";
import DesktopNav from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-zinc-100">
      <DesktopNav />
      <MobileNav />
      <Separator />
    </nav>
  );
};

export default NavBar;
