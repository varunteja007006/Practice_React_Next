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
import NavMobile from "./NavMobile";
import { Badge } from "@/components/ui/badge";

function Navbar() {
  return (
    <>
      <nav className="fixed z-[2] flex flex-row items-center justify-between w-full p-3 dark:bg-black/100 bg-white/70">
        <div className="ml-3 font-bold">
          <a href="/">{`<Developer />`}</a>
        </div>
        <NavigationMenu className="hidden lg:block">
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
                      <ListItemLink
                        key={project.title}
                        title={project.title}
                        href={project.href}
                      >
                        {project.description}
                        <span className="flex items-center mt-2">
                          {project.isNew && (
                            <Badge variant="success">New</Badge>
                          )}
                          {project.inProgress && (
                            <Badge variant="warning">In Progress</Badge>
                          )}
                        </span>
                      </ListItemLink>
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
        <div>
          <NavMobile />
        </div>
      </nav>
      <div className="h-16"></div>
    </>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-full",
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

const ListItemLink = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-full",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItemLink.displayName = "ListItemLink";
