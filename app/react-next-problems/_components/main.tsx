import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { problems_data } from "../problems_data";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Main = () => {
  return (
    <Card className="p-5 pt-2">
      <Accordion type="single" collapsible>
        {problems_data.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-2"
            >
              <AccordionTrigger className="text-xl font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                {item.statement.map((statement, index) => {
                  return (
                    <p key={index} className="text-base">
                      {statement}
                    </p>
                  );
                })}
                <Button
                  size={"icon"}
                  variant={"outline"}
                  asChild={true}
                  className="mt-5"
                >
                  <Link href={item.url}>
                    <ArrowUpRight />
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
};

export default Main;
