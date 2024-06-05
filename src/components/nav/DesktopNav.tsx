import { page_links } from "@/constants";
import { Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="header-1">
      <Link href="/" className="col-span-1 ">
        Logo
      </Link>
      <div className="col-span-9 flex justify-center gap-16 "></div>
      <div className="col-span-2 flex gap-5 justify-end ">
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <Menu className="cursor-pointer" />
      </div>
    </div>
  );
};

export default DesktopNav;
