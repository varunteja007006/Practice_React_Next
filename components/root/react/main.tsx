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
import { FaChevronDown } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
              <CardContent className="p-2 m-3 border rounded-md md:mx-10 md:my-5">
                <p className="py-1 font-semibold">Code Demo:</p>
                <div className="h-[1px] bg-zinc-500 w-full mb-3"></div>
                {item?.Component ?? null}
              </CardContent>

              <CardContent className="m-3 overflow-hidden border border-gray-600 rounded md:mx-10 md:my-5 bg-gray-50">
                <ScrollArea className="min-h-[200px] min-w-[350px] ">
                  <ScrollBar orientation="horizontal" />
                  <SyntaxHighlighter style={docco} language={LANGUAGE}>
                    {item.CodeSnippet || ""}
                  </SyntaxHighlighter>
                </ScrollArea>
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
