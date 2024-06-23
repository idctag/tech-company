"use client";
import {
  Navbar,
  Typography,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  Bars2Icon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { createElement, useEffect, useState } from "react";
import NavListMenu from "./_components/NavListMenu";

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "Blog",
    icon: CubeTransparentIcon,
  },
  {
    label: "Portfolio",
    icon: NewspaperIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {createElement(icon, { className: "h-[18px] w-[18px]" })}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="relative mx-auto grid grid-cols-2 lg:grid-cols-3 items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Logo
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
