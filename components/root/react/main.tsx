import React from "react";
import { react_data } from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyBlock } from "react-code-blocks";
import { FaChevronDown } from "react-icons/fa";

const LANGUAGE = "jsx";

const Main = () => {
  return (
    <section className="space-y-8">
      {react_data.map((item, index) => {
        return (
          <section key={index} id={item.id}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.explanation}</CardDescription>
              </CardHeader>
              <CardContent>{item?.Component ?? null}</CardContent>

              <CardContent className="mx-10 my-5 border border-gray-600 rounded bg-gray-50">
                <CopyBlock text={item.CodeSnippet || ""} language={LANGUAGE} />
              </CardContent>
              <CardFooter className="flex items-center justify-center w-full">
                <Button variant={"cool"} asChild>
                  <a href={item.href}>
                    <FaChevronDown className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </section>
        );
      })}
    </section>
  );
};

export default Main;
