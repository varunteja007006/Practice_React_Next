"use client";

import React, { ReactNode } from "react";
// import { CartContextProvider } from "./(root)/react/projects/shopping-cart/context/cartContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <CartContextProvider> */}
      {children}
      {/* </CartContextProvider> */}
      <ReactQueryDevtools
        initialIsOpen={false}
        buttonPosition={`bottom-right`}
      />
    </QueryClientProvider>
  );
}

export default Provider;
