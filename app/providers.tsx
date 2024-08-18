"use client";

import React, { ReactNode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function MyProvider({ children }: Readonly<{ children: ReactNode }>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
      <ReactQueryDevtools initialIsOpen={false} position={`bottom-right`} />
    </QueryClientProvider>
  );
}

export default MyProvider;
