import Link from "next/link";
import React from "react";

const urls = [
  {
    url: "/react-next-projects/basic/form-data",
    title: "Form Data",
    description: "Basic form data",
  },
];

export default function page() {
  return (
    <div className="space-y-4">
      <p className="text-lg">Basic</p>
      <ul className="space-y-2 flex flex-wrap">
        {urls.map((url) => (
          <li key={url.url} className="border p-2 pl-3 w-fit rounded-md">
            <Link href={url.url}>{url.title}</Link>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              {" "}
              - {url.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
