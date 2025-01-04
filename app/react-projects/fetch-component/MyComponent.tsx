import React from "react";

export default function MyComponent({
  data,
}: Readonly<{ data: React.ReactNode }>) {
  return (
    <div className="prose">
      <h1>Data & button from server</h1>
      <p>
        <span className="font-bold">page.tsx</span> fetches the data, and passes
        it as props to <span className="font-bold">MyComponent.tsx</span>. Now
        the <span className="font-bold">actions.tsx</span> fetches the data and
        passes it as props to <span className="font-bold">counter.tsx</span>.
        The file <span className="font-bold">counter.tsx</span> displays the
        data and a button that you can interact with.
      </p>
      <div>{data}</div>
    </div>
  );
}
