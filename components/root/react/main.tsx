import React from "react";
import { react_data } from "@/local-data/react_data";
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
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const LANGUAGE = "jsx";

const Main = () => {
  return (
    <div className="mt-5 space-y-8">
      {react_data.map((item, index) => {
        return (
          <section key={index} id={item.id}>
            <Card className="w-full mx-auto md:w-2/3">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.explanation}</CardDescription>
              </CardHeader>
              <CardContent className="p-2 m-3 border rounded-md md:mx-10 md:my-5">
                <p className="py-1 font-semibold">Code Demo:</p>
                <div className="h-[1px] bg-zinc-500 w-full mb-3"></div>
                {item?.Component ?? null}
              </CardContent>

              <CardContent className="p-0 m-3 overflow-hidden border border-gray-600 rounded md:mx-10 md:my-5 bg-gray-50">
                <ScrollArea className="min-h-[200px] min-w-[350px] flex">
                  <SyntaxHighlighter
                    style={atomDark}
                    language={LANGUAGE}
                    customStyle={{ margin: 0 }}
                  >
                    {item.CodeSnippet || ""}
                  </SyntaxHighlighter>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
              <CardFooter className="flex items-center justify-center w-full">
                <Button variant={"outline"} asChild>
                  <a href={item.href}>
                    <FaChevronDown className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </section>
        );
      })}
    </div>
  );
};

export default Main;
