"use client";
import { nav_products } from "@/constants";
import { Menu, Search, ShoppingCart } from "lucide-react";
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
        Logo
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
          <SheetContent className="flex flex-col w-80">
            <SheetHeader>
              <SheetTitle>Sheet title</SheetTitle>
              <SheetDescription>Sheet Description</SheetDescription>
            </SheetHeader>
            <Separator />
            <div>Sheet content</div>
            <Separator />
            <div>footer</div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default DesktopNav;
