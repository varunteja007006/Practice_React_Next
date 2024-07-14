"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRef } from "react";

const ProjectNavlinks = [
  {
    path: "/react/projects/tabs",
    name: "Tabs",
    isActive: true,
  },
  {
    path: "/react/projects/multi-page-form",
    name: "Multi-Page-Form",
    isActive: true,
  },
  {
    path: "/react/projects/materialUI",
    name: "Material UI",
    isActive: true,
  },
  {
    path: "/react/projects/image-slider",
    name: "Image Slider",
    isActive: true,
  },
  {
    path: "/react/projects/form-builder",
    name: "Form Builder",
    isActive: true,
  },
  {
    path: "/react/projects/zod-reacthookform",
    name: "Zod + React Hook Form",
    isActive: true,
  },
  {
    path: "/react/projects/shopping-cart",
    name: "Shopping Cart",
    isActive: true,
  },
  {
    path: "/react/projects/class-comp",
    name: "Class Component",
    isActive: true,
  },
  {
    path: "/react/projects/zustand",
    name: "Zustand Demo",
    isActive: true,
  },
  {
    path: "/react/projects/tailwind",
    name: "Tailwind Demo",
    isActive: true,
  },
  {
    path: "/react/projects/image-dragdrop",
    name: "Image Drag & Drop Component",
    isActive: true,
  },
  {
    path: "/react/projects/progress-scroll",
    name: "Progress on Scroll",
    isActive: true,
  },
  {
    path: "/react/projects/react-table",
    name: "React Table",
    isActive: true,
  },
];

const ReactPageNavLinks = [
  {
    path: "/react/projects",
    name: "Projects",
    isActive: true,
    subLinks: ProjectNavlinks,
  },
  {
    path: "/react/problems",
    name: "Problems",
    isActive: true,
    subLinks: [],
  },
];
function SideNavbar() {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleSubNavItemClick = () => {
    if (closeBtnRef) {
      closeBtnRef?.current?.click();
    }
  };

  return (
    <div className="space-y-5 w-[250px]">
      {ReactPageNavLinks.map((item) => {
        return (
          <Sheet key={item.path}>
            <SheetTrigger
              className="text-base border-[1px] border-violet-800  rounded w-full p-2"
              asChild
            >
              <Button variant="default">
                <RiMenuUnfoldLine className="w-4 h-4 me-4" />
                {item.name}
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-black/50">
              <SheetHeader className="my-4">
                <SheetDescription className="text-base text-white capitalize">
                  {item.name}
                </SheetDescription>
              </SheetHeader>
              {item.subLinks?.map((subItems) => {
                return (
                  <Button
                    key={subItems.name}
                    variant={"default"}
                    asChild
                    onClick={handleSubNavItemClick}
                    className="mx-4 my-2 border border-purple-600 hover:bg-purple-900 hover:text-white"
                  >
                    <Link href={subItems.path}>{subItems.name}</Link>
                  </Button>
                );
              })}
              <SheetClose className="hidden" ref={closeBtnRef}>
                Close
              </SheetClose>
            </SheetContent>
          </Sheet>
        );
      })}
    </div>
  );
}
export default SideNavbar;
