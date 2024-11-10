import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const FOLDER = `react-next-projects`;

const urls = [
  {
    url: `/${FOLDER}/basic/form-data`,
    title: "Form Data",
    description: "Basic form data",
  },
  {
    url: `/${FOLDER}/basic/react-children`,
    title: "React Children",
    description: "Passing props to children props",
  },
];

export default function Page() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Basic</h2>
      <p className="text-sm">A list of few basic projects are here</p>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-stretch justify-stretch gap-5">
        {urls.map((url) => (
          <li
            key={url.url}
            className="border p-2 pl-3 rounded-md border-gray-500"
          >
            <div className="flex font-semibold flex-col gap-3">
              {url.title}
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {url.description}
              </span>
              <Button variant={"default"} asChild>
                <Link href={url.url} className="text-sm">
                  Click here
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
