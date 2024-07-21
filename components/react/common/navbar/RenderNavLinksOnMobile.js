"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { cn } from "@/lib/utils";
import _ from "lodash";
import { usePathname } from "next/navigation";

const RenderNavLinksOnMobile = ({ links }) => {
  const [currentPath, setCurrentPath] = React.useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const closeBtnRef = React.useRef(null);

  const handleCloseSheet = () => {
    if (closeBtnRef.current) closeBtnRef.current.click();
  };

  return (
    <Sheet>
      <SheetTrigger className="block p-2 bg-white rounded-md shadow lg:hidden">
        <GiHamburgerMenu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className={"mb-2"}>
          <SheetTitle>Onboarding</SheetTitle>
        </SheetHeader>
        <>
          {!_.isEmpty(links) &&
            links?.map((item) => {
              const { Icon } = { ...item }; // Icons for the buttons
              const activeTab = currentPath.split("/").includes(item.target);

              return (
                <Button
                  key={item.path}
                  variant={"link"}
                  className={cn(
                    "justify-start w-full uppercase border shadow mb-1.5",
                    activeTab && "shadow-none bg-brandDark text-white"
                  )}
                  asChild
                >
                  <Link
                    href={item.path}
                    className="font-semibold"
                    onClick={handleCloseSheet}
                  >
                    {Icon || ""} {item.label}
                  </Link>
                </Button>
              );
            })}
        </>
        <SheetClose ref={closeBtnRef} className="hidden">
          Close
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default RenderNavLinksOnMobile;
