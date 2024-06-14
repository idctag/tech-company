"use client";
import { nav_products } from "@/constants";
import {
  Mail,
  MapPin,
  Menu,
  Phone,
  Pin,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import React from "react";
import Image from "next/image";

type ProductsType = {
  title: string;
  url: string;
};

type NavLinkProps = {
  title: string;
  products: ProductsType[];
};

function NavLink({ title, products }: NavLinkProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-lg">{title}</NavigationMenuTrigger>
      <NavigationMenuContent className="py-7">
        <ul className="min-w-72 flex flex-col align-middle">
          {products.map((product) => {
            return (
              <li key={product.title} className="hover:cursor-pointer">
                <Link href={product.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    asChild
                    className={
                      (navigationMenuTriggerStyle(),
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")
                    }
                  >
                    <div>
                      <div className="font-medium leading-none ml-5">
                        {product.title}
                      </div>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const DesktopNav = () => {
  return (
    <div className="header-1">
      <Link href="/" className="col-span-2 ">
        [Logo]
      </Link>
      <div className="col-span-8 justify-center flex">
        <NavigationMenu>
          <NavigationMenuList className="md:gap-6 lg:gap-12">
            {nav_products.map((item) => {
              return (
                <NavLink
                  key={item.title}
                  title={item.title}
                  products={item.products}
                />
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="col-span-2 flex gap-5 justify-end ">
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <Sheet>
          <SheetTrigger>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="flex flex-col min-w-60 py-32">
            <SheetHeader className="pb-8">
              <SheetTitle>Support & Downloads</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col gap-8 py-8">
              <h1 className="font-bold">Contact Info</h1>
              <div className="grid gap-4">
                <div className="flex align-middle gap-2">
                  <MapPin size={20} />
                  <p>[building xxx-xxx-xxx street]</p>
                </div>
                <div className="flex align-middle gap-2">
                  <Pin size={20} />
                  <p>[City Postal code xxx-xxx]</p>
                </div>
                <div className="flex align-middle gap-2">
                  <Mail size={20} />
                  <p>[email@gmail.com]</p>
                </div>
                <div className="flex align-middle gap-2">
                  <Phone size={20} />
                  <p>[+88 (0) 101 0000 000]</p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="py-8">
              <h1 className="font-bold">Follow us</h1>
              <div className="flex pt-6 gap-3">
                <Image
                  className="hover:cursor-pointer"
                  src="/facebook.svg"
                  alt="facebook"
                  width={45}
                  height={45}
                />
                <Image
                  className="hover:cursor-pointer"
                  src="/twitter.svg"
                  alt="twitter"
                  width={45}
                  height={45}
                />
                <Image
                  className="hover:cursor-pointer"
                  src="/youtube.svg"
                  alt="youtube"
                  width={45}
                  height={45}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default DesktopNav;
