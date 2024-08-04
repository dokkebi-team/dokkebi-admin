"use client";

import { MessageDialogProvider } from "@/components/MessageDialog";
import ThemeProvider from "@/components/ThemeToggle/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useBeforeUnload } from "@/hooks/use-before-unload";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <useBeforeUnload.Provider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <MessageDialogProvider>{children}</MessageDialogProvider>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </useBeforeUnload.Provider>
  );
};

export default AppProvider;
