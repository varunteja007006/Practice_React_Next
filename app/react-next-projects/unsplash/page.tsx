import React from "react";
import SearchForm from "./_components/search-form";
import Gallery from "./_components/gallery";

export default function page() {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Unsplash Project</h1>
      <p>
        {
          "Create a search functionality using React Context API and React Query"
        }
      </p>
      <SearchForm />
      <Gallery apiKey={apiKey} />
    </div>
  );
}
