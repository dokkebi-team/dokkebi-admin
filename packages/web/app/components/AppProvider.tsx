"use client";

import { MessageDialogProvider } from "@/components/MessageDialog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MessageDialogProvider>{children}</MessageDialogProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
