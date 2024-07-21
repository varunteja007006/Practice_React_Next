"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import _ from "lodash";

function RenderNavLinksOnDesktop({ links }) {
  const [currentPath, setCurrentPath] = React.useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <Card className="hidden w-full shadow lg:block ">
      <CardContent className="px-2 py-3 space-y-2">
        {!_.isEmpty(links) &&
          links?.map((item) => {
            const { Icon } = { ...item }; // Icons for the buttons
            const activeTab = currentPath.split("/").includes(item.target);

            return (
              <Button
                key={item.path}
                variant={activeTab ? "i4eDark" : "outline"}
                className={cn(
                  "justify-start w-full uppercase border-2 border-brandDark",
                  activeTab && "border-transparent"
                )}
                asChild
              >
                <Link href={item.path} className="font-semibold">
                  {Icon || ""} {item.label}
                </Link>
              </Button>
            );
          })}
      </CardContent>
    </Card>
  );
}

export default RenderNavLinksOnDesktop;
