import React, { Children } from "react";

function FormBody({ heading, children }) {
  return (
    <div className="mt-5 flex flex-col gap-3 w-fit">
      <h3 className="text-xl">{heading}</h3>
      {children}
    </div>
  );
}

export default FormBody;
