"use client";

import React from "react";

export default function MyComponent({
  data,
}: Readonly<{ data: React.ReactNode }>) {
  return <div>Data & button from server - {data}</div>;
}
