"use client";

import React, { ReactNode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

function Provider({ children }: Readonly<{ children: ReactNode }>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position={`bottom-right`} />
    </QueryClientProvider>
  );
}

export default Provider;
