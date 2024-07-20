import * as React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { projects } from "../../../local-data/projects_data";
import { ThemeToggle } from "@/components/ui/theme-toggle";

function Navbar() {
  return (
    <nav className="fixed z-10 flex flex-row items-center justify-between w-full p-3 dark:bg-black/100 bg-white/70">
      <div className="ml-3 font-bold">
        <a href="/">{`<Developer />`}</a>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <Link href="/react" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                React
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ScrollArea className="h-[300px]">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {projects.map((project) => (
                    <ListItem
                      key={project.title}
                      title={project.title}
                      href={project.href}
                    >
                      {project.description}
                    </ListItem>
                  ))}
                </ul>
              </ScrollArea>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/react-next-problems" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Problems
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div></div>
    </nav>
  );
}

export default Navbar;

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
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
