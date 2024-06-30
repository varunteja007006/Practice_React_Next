import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { problems_data } from "./data";
import { Card } from "@/components/ui/card";

const Main = () => {
  return (
    <Card className="px-8 py-3">
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
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
};

export default Main;
