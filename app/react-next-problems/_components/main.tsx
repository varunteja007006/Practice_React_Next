import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { problems_data } from "../../../local-data/problems_data";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Main = () => {
  return (
    <Card className="p-5">
      <Accordion type="single" collapsible>
        {problems_data.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-2"
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.statement.map((statement, index) => {
                  return (
                    <p key={index} className="text-base">
                      {statement}
                    </p>
                  );
                })}
                <Link href={item.url}> Click here</Link>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
};

export default Main;
