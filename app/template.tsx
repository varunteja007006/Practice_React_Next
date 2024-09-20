import React, { ReactNode } from "react";
import Transition from "./transition";

export default function Template({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <Transition>{children}</Transition>;
}
