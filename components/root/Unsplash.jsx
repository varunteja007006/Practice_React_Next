import React from "react";
import { CodeBlock } from "../components";
import SearchForm from "../components/unsplashComponents/SearchForm";
import Gallery from "../components/unsplashComponents/Gallery";

function unsplash() {
  return (
    <>
      <h1 className="text-2xl font-bold">Unsplash Project</h1>
      <CodeBlock
        heading={"Search the Unsplash Gallery"}
        explanation={
          "Create a search functionality using React Context API and React Query"
        }
      >
        <SearchForm></SearchForm>
        <Gallery></Gallery>
      </CodeBlock>
    </>
  );
}

export default unsplash;
