import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export const MobileNav = () => {
  return (
    <div className="header-2">
      <div className="col-span-1 cursor-pointer">
        <Menu />
      </div>
      <div className=" col-span-10 flex justify-center">
        <Link href="/">Logo</Link>
      </div>
    </div>
  );
};
