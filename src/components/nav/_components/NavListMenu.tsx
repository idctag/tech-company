"use client";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Fragment, createElement, useState } from "react";

type NavListMenuItemType = {
  title: string;
  description: string;
};

type NavListMenuType = {
  items: NavListMenuItemType[];
  title: string;
  icon: React.ElementType;
};

export default function NavListMenu({ items, title, icon }: NavListMenuType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = items.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              {createElement(icon, {
                className: "h-[18px] w-[18px] text-blue-gray-500",
              })}
              {title}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="gray"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon
              color="white"
              strokeWidth={1}
              className="h-28 w-28"
            />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        {createElement(icon, {
          className: "h-[18px] w-[18px] text-blue-gray-500",
        })}
        {title}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </Fragment>
  );
}
