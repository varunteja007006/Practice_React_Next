import React from "react";

function CodeBlock({ heading, explanation, children }) {
  return (
    <div className="border-2 border-black p-5 my-2 bg-yellow-100 dark:bg-black dark:text-white rounded-md">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      {explanation && (
        <p className="font-semibold my-2 text-justify">
          Explanation {"-->"} {explanation}
        </p>
      )}
      {children}
    </div>
  );
}

export default CodeBlock;
