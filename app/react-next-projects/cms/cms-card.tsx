import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import React from "react";

type propsType = {
  img: string;
  url: string;
  title: string;
};

function CmsCard({
  data,
}: Readonly<{
  data: propsType;
}>) {
  const { img, url, title } = data;
  return (
    <Card className="space-y-3 dark:bg-transparent/[0.4]">
      <img className="size-96 p-2 rounded-lg" src={img} alt={title} />
      <CardFooter>
        <Button variant={"outline"} asChild>
          <a href={url} className="text-lg mx-auto">
            {title.toUpperCase()}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CmsCard;
