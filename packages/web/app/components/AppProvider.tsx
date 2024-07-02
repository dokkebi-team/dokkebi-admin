"use client";

import { MessageDialogProvider } from "@/components/MessageDialog";
import ThemeProvider from "@/components/ThemeToggle/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MessageDialogProvider>{children}</MessageDialogProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
