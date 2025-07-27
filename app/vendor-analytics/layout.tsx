'use client'

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function VendorAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      {children}
      <Sonner />
    </TooltipProvider>
  );
}
