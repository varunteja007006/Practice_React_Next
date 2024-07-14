import React from "react";

function CustomCollapse({ label, children }) {
  return (
    <>
      <details className="collapse collapse-plus bg-base-200 mb-3 ">
        <summary className="collapse-title text-xl font-medium dark:text-black">
          {label}
        </summary>
        <div className="collapse-content">{children}</div>
      </details>
    </>
  );
}

export default CustomCollapse;
