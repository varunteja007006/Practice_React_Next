"use client";
import { useState } from "react";

const TableCell = () => {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};
