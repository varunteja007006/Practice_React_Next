"use client";

import React from "react";

export default function ShadowDOM() {
  React.useEffect(() => {
    const hostElement = document.getElementById("host");
    console.log(hostElement);
    if (hostElement !== null) {
      const shadow = hostElement.attachShadow({ mode: "open" });
      const span = document.createElement("span");
      span.textContent = "I'm in the shadow DOM";
      shadow.appendChild(span);
    }
  }, []);

  return (
    <div>
      I am not in Shadow DOM
      <div id="host"></div>
    </div>
  );
}
