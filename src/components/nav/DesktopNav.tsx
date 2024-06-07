"use client";
import { nav_products } from "@/constants";
import { Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {title} description
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          {products.map((product) => {
            return (
              <ListItem key={product.title} href={product.url}>
                {product.title}
              </ListItem>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
const DesktopNav = () => {
  return (
    <div className="header-1">
      <Link href="/" className="col-span-2 ">
        Logo
      </Link>
      <div className="col-span-8 justify-center flex">
        <NavigationMenu className="">
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
