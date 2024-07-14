"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navlinks } from "./navlink";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center md:justify-between w-full p-4 bg-transparent">
        <h1 className="hidden text-xl text-white cursor-pointer md:block px-2">
          <Link href="/">{`<Developer />`}</Link>
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[200px]">
                <FiMenu className="me-2" /> Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] flex flex-col items-center justify-center text-sm gap-2">
                  {navlinks.map((item, index) => {
                    return (
                      <li
                        key={index + 1}
                        className={`hover:bg-slate-200 w-full inline-flex items-center justify-center ${
                          navlinks.length === index + 1 && "pb-2"
                        }`}
                      >
                        <Link
                          href={item.path}
                          className="p-2 w-full inline-flex items-center justify-center "
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center p-2 text-xl cursor-pointer text-white md:hidden w-full">
        <h1>{`<Developer />`}</h1>
      </div>
    </>
  );
}

export default Navbar;
